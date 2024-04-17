import Carousel from "./Carrousel";
import { useTranslations, useMessages } from "next-intl";
const TranslateCarrousel = () => {
  const t = useTranslations("services");
  const messages = useMessages();
  const keys = Object.keys(messages.services);
  const images = keys.map((i) => ({
    title: t(`${i}.title`),
    image: t(`${i}.image`),
    url: t(`${i}.url`),
  }));

  return <Carousel images={images}></Carousel>;
};

export default TranslateCarrousel;
