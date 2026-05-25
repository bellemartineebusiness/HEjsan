import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/ui/lenis-provider";
import { GSAPInit } from "@/components/ui/gsap-init";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Projektgaranti AB Stockholm",
  description: "Vi säkerställer att ditt byggprojekt levereras i tid, inom budget och med garanterad kvalitet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-black text-white">
          <LenisProvider>
            <GSAPInit />
            {children}
          </LenisProvider>
        </body>
    </html>
  );
}
