import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SoundProvider } from "@web-kits/audio/react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import type { ReactNode } from "react";
import { DrawerShell } from "@/components/drawer-shell";
import { SidebarSlotProvider } from "@/components/sidebar-slot";
import { ThemeProvider } from "@/components/theme-provider";
import { TopNav } from "@/components/top-nav";
import "@/styles/index.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://audio.raphaelsalaja.com";
const SITE_NAME = "@web-kits/audio";
const SITE_DESCRIPTION = "Declarative audio synthesis for the web.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: {
    template: `${SITE_NAME} › %s`,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    "web audio",
    "audio synthesis",
    "declarative audio",
    "sound design",
    "web audio API",
    "react audio",
    "UI sounds",
    "sound effects",
    "synthesizer",
    "@web-kits/audio",
  ],
  authors: [{ name: "Raphael Salaja", url: "https://raphaelsalaja.com" }],
  creator: "Raphael Salaja",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: "@raphaelsalaja",
    site: "@raphaelsalaja",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <NuqsAdapter>
          <Analytics />
          <SpeedInsights />
          <SoundProvider>
            <ThemeProvider>
              <SidebarSlotProvider>
                <DrawerShell>
                  <TopNav />
                  {children}
                </DrawerShell>
              </SidebarSlotProvider>
            </ThemeProvider>
          </SoundProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
