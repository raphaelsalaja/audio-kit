"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        gap: 16,
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
          border: "1px solid var(--color-border)",
          borderRadius: 6,
          background: "transparent",
          cursor: "pointer",
          color: "inherit",
        }}
      >
        Try again
      </button>
    </div>
  );
}
