import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "govcomments | Your comment letter Shangri-La",
  description: "A search box. A table. Simple -- a blue-collar, down-home, working-class website for finding comment letters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="nav flex absolute z-9999 px-[16] md:px-[40px] py-[20px]">
          <div className="logo color-[white] font-semibold text-xl"><span className="text-[var(--primary)]">gov</span>comments</div>
        </nav>
        {children}
      </body>
    </html>
  );
}


//comment 