import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../[locale]/globals.css";
import Navbar from "@/components/admin/Navbar";
import ReturnButton from "@/components/admin/ReturnButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "admin",
  description: "administracion de la clinica",
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
        <ReturnButton></ReturnButton>
        <main className="flex min-h-screen flex-col items-center justify-between ">
          {children}
        </main>
      </body>
    </html>
  );
}
