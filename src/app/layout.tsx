import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import NextAuthProvider from "@/providers/NextAuthProvider";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Ordering-Food App",
  description: "Ordering Food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NextAuthProvider>
          <div className="px-4 max-w-4xl mx-auto mt-3">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
