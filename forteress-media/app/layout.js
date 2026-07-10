import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Forteress Media — Build. Rebuild. Refresh.",
  description:
    "AI-first media consulting for small businesses. Websites, apps, SEO, and strategy — delivered without the agency markup.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
