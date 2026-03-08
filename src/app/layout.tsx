import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import Navbar from "./navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Next.js Lab",
  description: "A mini Next.js app demonstrating component patterns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-black font-sans`}
      >
        <CartProvider>
      
          <header className="w-full bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-black dark:text-zinc-50">
              Rhay Danielle Cordero
            </h1>
            <Navbar />
          </header>

        
          <main className="min-h-[80vh] w-full flex flex-col items-center justify-start p-8">
            {children}
          </main>

      
          <footer className="w-full bg-white dark:bg-gray-900 shadow-inner p-4 text-center text-black dark:text-zinc-50">
            &copy; {year} Rhay's Next.js Lab. All rights reserved.
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}