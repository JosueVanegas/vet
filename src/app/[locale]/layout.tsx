import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/[locale]/components/Navbar";
import Footer from "@/app/[locale]/components/Footer";
import { useTranslations } from "next-intl";
import { url } from "inspector";

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
  const t = useTranslations("header.nav");
  const translationNav = {
    home: {
      name: t("home.name"),
      url: t("home.url"),
    },
    contact: {
      name: t("contact.name"),
      url: t("contact.url"),
    },
    services: {
      name: t("services.name"),
      exams: {
        name: t("services.exams.name"),
        url: t("services.exams.url"),
      },
    },
  };
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navbar locale={translationNav}></Navbar>
        <main className="flex min-h-screen flex-col items-center justify-between ">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
