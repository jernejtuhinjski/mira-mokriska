import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Inštitut Mire Mokriške",
    template: "%s | Inštitut Mire Mokriške",
  },
  description:
    "Prostor za raziskovanje, ohranjanje in navdih ženskega ustvarjalnega izraza. Odkrivamo in vračamo glas pozabljeni pesnici Miri Mokriški.",
  keywords: ["Mira Mokriška", "Razgaljeno srce", "pesnica", "inštitut", "Slovenija", "poezija"],
  icons: {
    icon: "/images/Logo MM.png",
    apple: "/images/Logo MM.png",
  },
  openGraph: {
    type: "website",
    locale: "sl_SI",
    siteName: "Inštitut Mire Mokriške",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sl"
      className={cn(
        "h-full antialiased",
        cormorant.variable,
        inter.variable,
        geistMono.variable
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
