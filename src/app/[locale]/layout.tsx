import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/[locale]/components/Navbar";
import Footer from "@/app/[locale]/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "veterinaria",
  description: "vet",
};

export default function MainLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navbar></Navbar>
        <main className="flex min-h-screen flex-col items-center justify-between ">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
