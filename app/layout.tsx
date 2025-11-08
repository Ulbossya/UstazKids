import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UstazKids",
  description: "UstazKids — балабақша тәрбиешілеріне арналған цифрлық орта",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kk">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
