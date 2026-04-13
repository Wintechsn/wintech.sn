import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer/Footer";
import Providers from "../providers/Provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-YD266BBLGR";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  style: ["normal", "italic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${interTight.variable} ${instrumentSerif.variable}`}
    >
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="antialiased font-inter-tight overflow-x-hidden min-w-0" suppressHydrationWarning>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Providers>
          <Header />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
