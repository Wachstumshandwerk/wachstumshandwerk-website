import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookiebotScript } from "@/components/consent/CookiebotScript";
import { AnalyticsScripts } from "@/components/consent/AnalyticsScripts";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wachstumshandwerk.de"),
  title: {
    default: "Wachstumshandwerk – Vertriebspartner mit Handwerksverstand",
    template: "%s | Wachstumshandwerk",
  },
  description:
    "Wachstumshandwerk übernimmt die Anfragen-Qualifizierung und das komplette Nachfassmanagement für Handwerksbetriebe – damit Geschäftsführer Zeit zurückgewinnen und bessere Aufträge abschließen.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${manrope.variable} h-full antialiased`}>
      <head>
        <CookiebotScript />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
