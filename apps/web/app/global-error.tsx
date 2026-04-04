"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            gap: 16,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: 0 }}>
            Something went wrong
          </h2>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 8,
              padding: "8px 16px",
              border: "1px solid #333",
              borderRadius: 6,
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
