export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // Add Node.js-specific tracing providers here (e.g. @opentelemetry/sdk-node)
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    // Add Edge-specific tracing providers here
  }
}
