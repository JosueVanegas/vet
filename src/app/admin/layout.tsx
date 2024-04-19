"use client";
import "../[locale]/globals.css";
import Navbar from "@/components/admin/Navbar";
import ReturnButton from "@/components/admin/ReturnButton";
import { validate } from "@/libs/Session";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const [allow, setAllow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const validateUser = async () => {
      const value = await validate();
      if (!value) {
        setAllow(false);
        return router.push("/es/login");
      }
      setAllow(true);
    };
    validateUser();
  }, []);
  return (
    <html>
      {allow ? (
        <body>
          <Navbar></Navbar>
          <ReturnButton></ReturnButton>
          <main className="flex min-h-screen flex-col items-center justify-between ">
            {children}
          </main>
        </body>
      ) : (
        <body className="flex min-h-full items-center justify-center text-3xl">
          <h1>acceso denegado inicia sesion, redirigiendo...</h1>
        </body>
      )}
    </html>
  );
}
