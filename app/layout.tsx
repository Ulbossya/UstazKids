import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


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
      <body className={`${inter.className} bg-[#F7F7F8] text-[#4B4B4B]`}>
        {/* Барлық беттерге ортақ Header */}
        <Header />

        {/* Негізгі контент */}
        <main>{children}</main>

        {/* Барлық беттерге ортақ Footer */}
        <Footer />
      </body>
    </html>
  );
}
