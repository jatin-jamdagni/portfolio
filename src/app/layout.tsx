import type { Metadata } from "next";
import { Fira_Mono, Fira_Sans } from "next/font/google";
import "./globals.css";
import SnowflakeCursor from "@/components/SnowCursor";

const firaSans = Fira_Sans({
  weight: "500",
  subsets: ["latin"],
});

const firaMono = Fira_Mono({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hi, I'm Jatin Sharma",
  description: "Frontend Developer....",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaMono.className} ${firaSans.className}  antialiased`}
      >
        <div className=" h-screen overflow-hidden bg-[#1D1616] ">
          <SnowflakeCursor />

          {children}

        </div>
      </body>
    </html>
  );
}
