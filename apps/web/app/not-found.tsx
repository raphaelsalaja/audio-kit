import Link from "next/link";

export default function NotFound() {
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
      <h2 style={{ fontSize: 24, fontWeight: 600, margin: 0 }}>Not Found</h2>
      <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
        Could not find the requested resource.
      </p>
      <Link
        href="/"
        style={{
          marginTop: 8,
          color: "var(--color-text-primary)",
          textDecoration: "underline",
        }}
      >
        Back to home
      </Link>
    </div>
  );
}
