import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer/Footer";
import Providers from "../providers/Provider";
import { Instrument_Serif, Inter_Tight } from "next/font/google";

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
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
