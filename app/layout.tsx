import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const inter = DM_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Jatin Sharma",
  description: "Welcome to the Portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
