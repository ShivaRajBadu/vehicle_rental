import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navabar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vehicle Rental",
  description: "All type of Vehicle rental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navabar />
          {children}
        </div>
      </body>
    </html>
  );
}
