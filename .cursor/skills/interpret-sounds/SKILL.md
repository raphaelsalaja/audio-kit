---
name: interpret-sounds
description: >-
  Analyze audio files to extract synthesis parameters: fundamental frequency,
  pitch envelope, attack time, duration, harmonic content, filters, effects,
  and stereo positioning. Use when reverse-engineering sounds from sample
  libraries,   comparing audio output against @web-kits/audio definitions, splitting
  audio sprites, or running FFT analysis on WAV/MP3 files.
---

# Interpret Sounds

Extracts synthesis parameters from audio files using FFT analysis, then maps the results to @web-kits/audio `SoundDefinition` properties. Use this to reverse-engineer sample libraries, validate @web-kits/audio output against reference sounds, or build definitions from existing audio.

**Dependencies:** Python 3, `numpy`, `scipy`, `ffmpeg` (CLI).

## Pipeline

```
Acquire source → Extract individual sounds → Analyze → Map to SoundDefinition
```

### Step 1: Acquire source audio

If the source is an audio sprite (single file containing multiple sounds), download it first.

```bash
npm pack <package-name> --pack-destination /tmp
tar -xzf /tmp/<package-name>-*.tgz -C /tmp
```

Look for MP3/WAV sprite files and any JSON manifest that maps sound names to time offsets.

### Step 2: Extract individual sounds

Split the sprite into per-sound WAV files using ffmpeg. If a manifest provides start times and durations:

```bash
ffmpeg -i sprite.mp3 -ss <start_seconds> -t <duration_seconds> -acodec pcm_s16le -ar 44100 output/<name>.wav
```

If no manifest exists, use silence detection:

```bash
ffmpeg -i sprite.mp3 -af silencedetect=noise=-40dB:d=0.05 -f null -
```

Then split at the detected boundaries.

### Step 3: FFT analysis

Run frequency-domain analysis using Python with scipy:

```python
import numpy as np
from scipy.io import wavfile
from scipy.fft import rfft, rfftfreq

sample_rate, data = wavfile.read("sound.wav")
if data.ndim > 1:
    data = data[:, 0]

def analyze_slice(data, sample_rate, start_ms, window_ms=10):
    start = int(sample_rate * start_ms / 1000)
    end = start + int(sample_rate * window_ms / 1000)
    segment = data[start:end].astype(float)
    if len(segment) == 0:
        return None
    segment *= np.hanning(len(segment))
    spectrum = np.abs(rfft(segment))
    freqs = rfftfreq(len(segment), 1 / sample_rate)
    peak_idx = np.argmax(spectrum[1:]) + 1
    return freqs[peak_idx]
```

#### Core parameters

| Parameter | Method | Maps to |
| --- | --- | --- |
| Fundamental frequency | Peak FFT bin at onset (5-10ms in) | `source.frequency` |
| Pitch envelope | Compare frequency at 0ms, 5ms, 10ms, 20ms, 50ms | `source.frequency: { start, end }` |
| Active duration | Time above noise floor (-40dB threshold) | `envelope.decay` / `envelope.release` |
| Attack time | Onset to peak amplitude | `envelope.attack` |
| Sustain level | Amplitude ratio: sustain region vs peak | `envelope.sustain` |
| Harmonic content | Ratio of harmonic peaks to fundamental | Infer `source.type` |
| Peak amplitude | Max absolute sample value, normalized 0-1 | `gain` |
| Stereo balance | L/R channel amplitude ratio | `pan` (-1 to 1) |

#### Inferring oscillator type from harmonics

| Pattern | Source type |
| --- | --- |
| Fundamental only, harmonics < -40dB | `sine` |
| Odd harmonics rolling off as 1/n | `triangle` |
| All harmonics rolling off as 1/n | `sawtooth` |
| Odd harmonics at roughly equal amplitude | `square` |
| No clear harmonic structure, broadband energy | `noise` |
| Custom harmonic profile (none of the above) | `wavetable` |

```python
def classify_waveform(spectrum, freqs, fundamental_freq):
    harmonics = []
    for n in range(2, 9):
        target = fundamental_freq * n
        idx = np.argmin(np.abs(freqs - target))
        harmonics.append(spectrum[idx])
    fund_amp = spectrum[np.argmin(np.abs(freqs - fundamental_freq))]
    ratios = [h / fund_amp for h in harmonics]

    if all(r < 0.01 for r in ratios):
        return "sine"
    odd_only = all(ratios[i] < 0.05 for i in [0, 2, 4])
    if odd_only and ratios[1] > 0.05:
        return "square" if ratios[1] > 0.3 else "triangle"
    if all(r > 0.01 for r in ratios[:4]):
        return "sawtooth"
    return "wavetable"
```

#### Noise color classification

For broadband signals with no clear fundamental, classify noise color by spectral slope (power vs frequency on log-log scale):

| Slope (dB/octave) | Color | Maps to |
| --- | --- | --- |
| ~0 (flat) | `white` | `source: { type: "noise", color: "white" }` |
| ~-3 | `pink` | `source: { type: "noise", color: "pink" }` |
| ~-6 | `brown` | `source: { type: "noise", color: "brown" }` |

#### Filter detection

Analyze spectral rolloff to detect filtering. Compare the measured spectrum against the expected spectrum for the identified oscillator type:

| Observation | Filter type | Maps to |
| --- | --- | --- |
| High-frequency rolloff steeper than source would produce | `lowpass` | `filter: { type: "lowpass", frequency: <cutoff_hz> }` |
| Low-frequency rolloff | `highpass` | `filter: { type: "highpass", frequency: <cutoff_hz> }` |
| Narrow frequency band passes through | `bandpass` | `filter: { type: "bandpass", frequency: <center_hz> }` |
| Narrow frequency notch removed | `notch` | `filter: { type: "notch", frequency: <notch_hz> }` |
| Resonant peak near cutoff | High Q | `filter: { ..., resonance: <Q_value> }` |

Estimate cutoff frequency as the point where amplitude drops 3dB below the expected level. If the spectral brightness changes over time (bright attack fading to dull), this indicates a filter envelope:

```ts
filter: {
  type: "lowpass",
  frequency: <resting_cutoff_hz>,
  envelope: { attack: <s>, peak: <peak_cutoff_hz>, decay: <s> },
}
```

#### Effects detection

| Signature | Effect | How to detect |
| --- | --- | --- |
| Decaying tail after source ends | Reverb | Energy persists > 50ms after envelope ends |
| Repeated echoes at fixed intervals | Delay | Autocorrelation peaks at regular intervals |
| Periodic amplitude modulation | Tremolo | Low-frequency (~1-20Hz) AM in envelope |
| Periodic frequency modulation | Vibrato | Low-frequency FM visible in pitch tracking |
| Comb-filter pattern sweeping over time | Flanger/Chorus | Moving notches in spectrum |
| Spectral sidebands around fundamental | FM synthesis | `source.fm: { ratio, depth }` |
| Aliasing artifacts, stepped waveform | Bitcrusher | Quantization noise floor |
| Flat-topped waveform, added harmonics | Distortion | Clipping in time domain |

For effects, report detection confidence. Precise parameter extraction is harder than source/envelope analysis. Use as hints, not exact values.

#### LFO detection

Periodic modulation at sub-audio rates (0.1-20Hz) indicates an LFO. Check for:

- Amplitude cycling → `lfo: { target: "gain", frequency: <rate>, depth: <amount> }`
- Pitch cycling → `lfo: { target: "frequency", ... }` or `lfo: { target: "detune", ... }`
- Filter sweep cycling → `lfo: { target: "filter.frequency", ... }`

Measure rate from peak-to-peak interval. Measure depth from min/max excursion.

#### Multi-layer detection

If the spectrum contains two or more distinct fundamentals that are not harmonically related, the sound likely uses multiple layers. Split analysis per detected fundamental and output a `MultiLayerSound`:

```ts
{ layers: [{ source: { ... }, envelope: { ... } }, { source: { ... }, envelope: { ... } }] }
```

### Step 4: Map to @web-kits/audio definitions

The `SoundDefinition` type is `Layer | MultiLayerSound`. A single `Layer`:

```ts
{
  source: {
    type: "<inferred>",
    frequency: 440,              // static pitch
    // OR for pitch sweep:
    frequency: { start: 880, end: 220 },
  },
  envelope: {
    attack: 0.005,
    decay: 0.15,
    sustain: 0,                  // 0 for percussive, 0-1 for sustained
    release: 0.01,
  },
  gain: 0.8,
  pan: 0,                        // -1 (left) to 1 (right)
  filter: {                      // omit if no filtering detected
    type: "lowpass",
    frequency: 2000,
    resonance: 1,
  },
  effects: [],                   // only include if effects detected
  lfo: [],                       // only include if LFO detected
}
```

If the sound is unsynthesizable (complex transients, recorded material, layered samples), fall back to `{ source: { type: "sample" } }` and note that the original audio file should be used directly.

## Analysis report format

Use this structure per sound:

```
### <sound name>
- Frequency: <Hz> (static) or <Hz> → <Hz> (sweep)
- Duration: <ms> active
- Attack: <ms>
- Sustain: <ratio 0-1>
- Waveform: <type> (confidence: high/medium/low)
- Filter: <type> at <Hz>, Q=<value> (or "none detected")
- Effects: <list> (or "none detected")
- Pan: <value> (or "center")
- Layers: <count>
- Suggested definition: { ... }
```

## Time slices

Analyze frequency at multiple time points to detect pitch sweeps:

| Slice | Purpose |
| --- | --- |
| 0ms | Initial transient (may be noisy) |
| 5ms | Post-attack fundamental |
| 10ms | Early sustain |
| 20ms | Mid sustain |
| 50ms | Late sustain / decay |

A decreasing frequency across slices → `frequency: { start: <high>, end: <low> }`.
An increasing sequence → `frequency: { start: <low>, end: <high> }`.

## Tips

- Use a Hanning window before FFT to reduce spectral leakage.
- Skip the first 1-2ms if the onset is a click transient.
- For very short sounds (< 20ms), use fewer time slices and a smaller FFT window.
- Normalize amplitude data before comparing across sounds.
- If harmonic classification is ambiguous, report confidence as "low" and note competing possibilities.
- For stereo files, analyze both channels. Amplitude difference → `pan`. Phase difference may indicate spatial processing (`panner`).
- When a sound doesn't match any standard oscillator type well, consider `wavetable` with extracted `harmonics` array, or fall back to `sample`.

For detailed analysis techniques, see [reference.md](reference.md).
