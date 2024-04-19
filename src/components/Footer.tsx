import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="flex flex-col items-center justify-center bg-primary text-white">
      <section className="flex  items-center justify-around gap-10 md:gap-60 py-20">
        <div>{t("companyName")}</div>
        <div>
          <ul className="flex flex-col items-start">
            <a href={t("menu.home.url")}>{t("menu.home.name")}</a>
            <a href={t("menu.contact.url")}>{t("menu.contact.name")}</a>
            <a href={t("menu.services.url")}>{t("menu.services.name")}</a>
            <a className="text-xl font-bold animate-pulse" href="/admin">
              admin
            </a>
          </ul>
        </div>
        <div> facebook | instagram | youtube</div>
      </section>
      <section>
        <span className="text-[12px]">
          {"© Veterinaria " +
            new Date().getFullYear().toString() +
            " | " +
            t("legal.copyright")}
        </span>
      </section>
    </footer>
  );
};

export default Footer;
