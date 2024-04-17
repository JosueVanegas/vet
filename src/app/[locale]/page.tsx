import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";
import TranslatedCarrousel from "./components/TranslatedCarrousel";
export default function Home() {
  const t = useTranslations("index");
  return (
    <>
      <section className="flex flex-col   w-full md:flex-row items-center justify-around">
        <div className=" flex flex-col items-center  text-center justify-center">
          <h1 className="text-5xl">{t("welcome.title")}</h1>
          <p className="w-[90%] text-lg">{t("welcome.description")}</p>
        </div>
        <div className="flex items-center justify-center py-2 z-20">
          <img src="/images/vet-dog.svg" alt="" />
        </div>
      </section>
      <section className="flex overflow-hidden flex-col justify-center items-center w-full">
        <h1 className="text-5xl text-center py-10">{t("services.title")}</h1>
        <TranslatedCarrousel></TranslatedCarrousel>
        <button className="my-20 py-2 bg-primary text-white text-2xl px-20">
          {t("services.button")}
        </button>
      </section>
      <section className="relative py-10 w-full">
        <img className="translate-y-2 w-full" src="/images/Shape.svg" alt="" />
        <div className="flex flex-col justify-center items-center py-10 text-white z-20 bg-primary">
          <h1>{t("contact.title")}</h1>
          <p>{t("contact.description")}</p>
          <button className="py-2 px-10 bg-white text-primary">
            {t("contact.button")}
          </button>
        </div>
        <img
          className="rotate-180 -translate-y-2 w-full"
          src="/images/Shape.svg"
          alt=""
        />
      </section>
    </>
  );
}
