# Reference: Advanced Analysis Techniques

Detailed methods for parameters that are harder to extract. Read this when the basic pipeline in SKILL.md needs more precision.

## Full ADSR extraction

Attack, decay, sustain, and release map directly to `Envelope`:

```python
def extract_envelope(data, sample_rate, noise_floor_db=-40):
    amplitude = np.abs(data.astype(float))
    window = int(sample_rate * 0.001)  # 1ms smoothing
    smoothed = np.convolve(amplitude, np.ones(window)/window, mode='same')

    noise_floor = np.max(smoothed) * 10 ** (noise_floor_db / 20)
    peak_idx = np.argmax(smoothed)
    peak_amp = smoothed[peak_idx]

    # Attack: first sample above noise floor → peak
    onset = np.argmax(smoothed > noise_floor)
    attack_s = (peak_idx - onset) / sample_rate

    # Find sustain region: stable amplitude after initial decay
    # Look at the region from 30% to 70% of active duration
    active_end = len(smoothed) - 1 - np.argmax(smoothed[::-1] > noise_floor)
    mid_start = peak_idx + int((active_end - peak_idx) * 0.3)
    mid_end = peak_idx + int((active_end - peak_idx) * 0.7)
    if mid_end > mid_start:
        sustain_amp = np.mean(smoothed[mid_start:mid_end])
        sustain_ratio = sustain_amp / peak_amp
    else:
        sustain_ratio = 0

    # Decay: peak → sustain level
    if sustain_ratio > 0.01:
        sustain_threshold = peak_amp * sustain_ratio * 1.1
        decay_end = peak_idx + np.argmax(smoothed[peak_idx:] < sustain_threshold)
        decay_s = (decay_end - peak_idx) / sample_rate
    else:
        decay_s = (active_end - peak_idx) / sample_rate

    # Release: last sample above sustain level → noise floor
    release_start = active_end - int((active_end - peak_idx) * 0.1)
    release_s = (active_end - release_start) / sample_rate

    return {
        "attack": round(attack_s, 4),
        "decay": round(decay_s, 4),
        "sustain": round(max(0, min(1, sustain_ratio)), 3),
        "release": round(max(0.005, release_s), 4),
    }
```

## Spectral centroid for filter estimation

The spectral centroid indicates perceived brightness. Compare it against the expected centroid for the identified oscillator to estimate filter cutoff:

```python
def spectral_centroid(spectrum, freqs):
    return np.sum(freqs * spectrum) / np.sum(spectrum)

# Expected centroid for common waveforms (approximate, at 440Hz fundamental):
# sine: ~440Hz, triangle: ~880Hz, sawtooth: ~2200Hz, square: ~1760Hz
# If measured centroid is significantly lower, a lowpass filter is likely present.
```

## Resonance (Q) estimation

A resonant peak near the cutoff frequency indicates filter Q > 1:

```python
def estimate_resonance(spectrum, freqs, cutoff_hz, bandwidth_hz=200):
    cutoff_region = (freqs > cutoff_hz - bandwidth_hz) & (freqs < cutoff_hz + bandwidth_hz)
    if not np.any(cutoff_region):
        return 1.0
    peak_in_region = np.max(spectrum[cutoff_region])
    baseline = np.mean(spectrum[(freqs > cutoff_hz * 0.3) & (freqs < cutoff_hz * 0.7)])
    if baseline == 0:
        return 1.0
    q_estimate = peak_in_region / baseline
    return round(max(0.1, min(20, q_estimate)), 1)
```

## Filter envelope detection

Compute spectral centroid at each time slice. If the centroid decreases over time, this suggests a filter envelope (bright attack decaying to darker sustain):

```python
def detect_filter_envelope(data, sample_rate, slices_ms=[0, 5, 10, 20, 50, 100]):
    centroids = []
    for t in slices_ms:
        start = int(sample_rate * t / 1000)
        end = start + int(sample_rate * 0.01)
        segment = data[start:end].astype(float)
        if len(segment) == 0:
            break
        segment *= np.hanning(len(segment))
        spectrum = np.abs(rfft(segment))
        freqs = rfftfreq(len(segment), 1 / sample_rate)
        centroids.append(spectral_centroid(spectrum, freqs))

    if len(centroids) < 2:
        return None

    # Decreasing centroid = filter closing
    if centroids[0] > centroids[-1] * 1.5:
        return {
            "peak": round(centroids[0]),        # filter.envelope.peak
            "resting": round(centroids[-1]),     # filter.frequency
            "decay_ms": slices_ms[len(centroids)-1],
        }
    return None
```

## Reverb detection

After the source envelope ends (amplitude drops below source noise floor), measure any remaining energy tail:

```python
def detect_reverb(data, sample_rate, envelope_end_ms):
    start = int(sample_rate * envelope_end_ms / 1000)
    tail = data[start:].astype(float)
    if len(tail) == 0:
        return None

    amplitude = np.abs(tail)
    noise_floor = np.max(np.abs(data.astype(float))) * 0.001
    tail_end = np.argmax(amplitude[::-1] > noise_floor)
    tail_duration_s = (len(tail) - tail_end) / sample_rate

    if tail_duration_s > 0.05:
        return {"type": "reverb", "decay": round(tail_duration_s, 2)}
    return None
```

## Delay detection

Use autocorrelation to find repeated echoes:

```python
def detect_delay(data, sample_rate, min_delay_ms=20, max_delay_ms=1000):
    signal = data.astype(float)
    signal = signal / (np.max(np.abs(signal)) + 1e-10)

    min_lag = int(sample_rate * min_delay_ms / 1000)
    max_lag = int(sample_rate * max_delay_ms / 1000)
    max_lag = min(max_lag, len(signal) - 1)

    autocorr = np.correlate(signal[:max_lag*2], signal[:max_lag*2], mode='full')
    autocorr = autocorr[len(autocorr)//2:]

    # Find peaks in autocorrelation beyond minimum lag
    from scipy.signal import find_peaks
    peaks, properties = find_peaks(autocorr[min_lag:max_lag], height=0.1 * autocorr[0])

    if len(peaks) > 0:
        delay_samples = peaks[0] + min_lag
        delay_time = delay_samples / sample_rate
        feedback = autocorr[delay_samples] / autocorr[0] if autocorr[0] > 0 else 0
        return {
            "type": "delay",
            "time": round(delay_time, 3),
            "feedback": round(max(0, min(0.95, feedback)), 2),
        }
    return None
```

## LFO rate and depth measurement

Track a parameter (amplitude, pitch, or spectral centroid) over time, then measure periodicity:

```python
def detect_lfo(parameter_over_time, sample_rate_of_measurements):
    """parameter_over_time: array of measurements taken at regular intervals"""
    from scipy.fft import rfft, rfftfreq

    centered = parameter_over_time - np.mean(parameter_over_time)
    spectrum = np.abs(rfft(centered))
    freqs = rfftfreq(len(centered), 1 / sample_rate_of_measurements)

    # Look in LFO range: 0.1Hz - 20Hz
    lfo_mask = (freqs > 0.1) & (freqs < 20)
    if not np.any(lfo_mask):
        return None

    lfo_spectrum = spectrum.copy()
    lfo_spectrum[~lfo_mask] = 0
    peak_idx = np.argmax(lfo_spectrum)

    if spectrum[peak_idx] > np.mean(spectrum) * 3:
        rate = freqs[peak_idx]
        depth = (np.max(parameter_over_time) - np.min(parameter_over_time)) / 2
        return {"frequency": round(rate, 1), "depth": round(depth, 4)}
    return None
```

## Stereo analysis

For stereo files, compare left and right channels:

```python
def analyze_stereo(data):
    if data.ndim < 2:
        return {"pan": 0, "stereo_width": 0}

    left = data[:, 0].astype(float)
    right = data[:, 1].astype(float)

    l_rms = np.sqrt(np.mean(left**2))
    r_rms = np.sqrt(np.mean(right**2))

    if l_rms + r_rms == 0:
        return {"pan": 0, "stereo_width": 0}

    # Pan: -1 (full left) to 1 (full right)
    pan = (r_rms - l_rms) / (r_rms + l_rms)

    # Stereo width: correlation between channels
    # 1.0 = mono, 0.0 = fully decorrelated, <0 = out of phase
    correlation = np.corrcoef(left, right)[0, 1]
    stereo_width = 1.0 - abs(correlation)

    return {
        "pan": round(pan, 2),
        "stereo_width": round(stereo_width, 2),
    }
```

## Wavetable harmonic extraction

When oscillator classification returns "wavetable", extract the harmonic amplitudes for the `harmonics` array:

```python
def extract_harmonics(spectrum, freqs, fundamental_freq, num_harmonics=16):
    harmonics = []
    fund_amp = spectrum[np.argmin(np.abs(freqs - fundamental_freq))]
    if fund_amp == 0:
        return [1.0] + [0.0] * (num_harmonics - 1)

    for n in range(1, num_harmonics + 1):
        target = fundamental_freq * n
        if target > freqs[-1]:
            harmonics.append(0.0)
        else:
            idx = np.argmin(np.abs(freqs - target))
            harmonics.append(round(spectrum[idx] / fund_amp, 4))
    return harmonics
```

Maps to: `{ source: { type: "wavetable", harmonics: [...], frequency: <Hz> } }`

## Noise color slope measurement

```python
def classify_noise_color(spectrum, freqs):
    mask = (freqs > 100) & (freqs < 10000)
    log_freqs = np.log10(freqs[mask])
    log_power = 20 * np.log10(spectrum[mask] + 1e-10)

    slope = np.polyfit(log_freqs, log_power, 1)[0]

    if abs(slope) < 1.5:
        return "white"
    elif abs(slope) < 4.5:
        return "pink"
    else:
        return "brown"
```

## FM synthesis detection

FM synthesis produces sidebands at `carrier ± n * modulator`. If the spectrum shows symmetric sideband pairs around the fundamental that don't align with integer harmonics:

```python
def detect_fm(spectrum, freqs, fundamental_freq):
    peak_indices = find_peaks(spectrum, height=np.max(spectrum) * 0.05)[0]
    peak_freqs = freqs[peak_indices]

    # Check for sidebands that aren't integer harmonics
    non_harmonic = []
    for f in peak_freqs:
        ratio = f / fundamental_freq
        if abs(ratio - round(ratio)) > 0.05:
            non_harmonic.append(f)

    if len(non_harmonic) >= 2:
        # Estimate modulator frequency from sideband spacing
        spacings = np.diff(sorted(non_harmonic))
        mod_freq = np.median(spacings)
        depth = len(non_harmonic)  # rough proxy for modulation index
        return {
            "fm": {
                "ratio": round(mod_freq / fundamental_freq, 2),
                "depth": min(1000, round(depth * 100)),
            }
        }
    return None
```
