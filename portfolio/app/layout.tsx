import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css"; // Only import global CSS here

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sujan Khadka | Portfolio",
  description: "Software Engineer & Data Analyst Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white min-h-screen`}
      >
        {/* Modern Floating Navbar */}
        <header className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4 print:hidden">
          <nav className="flex items-center gap-1 p-1.5 rounded-full border border-white/20 bg-zinc-900/80 backdrop-blur-md shadow-2xl transition-all hover:border-white/30">
            <Link 
              href="/" 
              className="px-6 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              Data Stories
            </Link>
            
            <div className="w-[1px] h-4 bg-white/20 mx-1" />
            
            <Link 
              href="/about" 
              className="px-6 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              About & Resume
            </Link>
          </nav>
        </header>

        <main className="pt-28 pb-12">
          {children}
        </main>
      </body>
    </html>
  );
}