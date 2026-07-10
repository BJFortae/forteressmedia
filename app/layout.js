import { Archivo } from "next/font/google";
import "./globals.css";

const siteUrl = "https://forteressmedia.com";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Forteress Media | AI-First Website, App & Media Consulting",
    template: "%s | Forteress Media",
  },
  description:
    "Forteress Media helps small businesses build, rebuild, and refresh websites, apps, SEO, media strategy, and AI-enabled workflows from Minneapolis, Minnesota.",
  applicationName: "Forteress Media",
  authors: [{ name: "Forteress Media", url: siteUrl }],
  creator: "Forteress Media",
  publisher: "Forteress Media",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Forteress Media",
    "AI-first consulting",
    "website builds",
    "website refreshes",
    "app creation",
    "SEO optimization",
    "media strategy",
    "AI workflows",
    "small business website consultant",
    "Minneapolis web consultant",
    "Minnesota AI consultant",
  ],
  category: "Business consulting",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Forteress Media",
    title: "Forteress Media | AI-First Website, App & Media Consulting",
    description:
      "Build, rebuild, and refresh websites, apps, SEO, media strategy, and AI workflows with Forteress Media.",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Forteress Media - Build. Rebuild. Refresh.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forteress Media | AI-First Website, App & Media Consulting",
    description:
      "AI-first media consulting for small businesses: websites, apps, SEO, strategy, and workflows.",
    images: [`${siteUrl}/twitter-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    other: {
      "geo.region": "US-MN",
      "geo.placename": "Minneapolis",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
