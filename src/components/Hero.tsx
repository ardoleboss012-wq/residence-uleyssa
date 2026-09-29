import ScrollExpandMedia from "./ui/scroll-expansion-hero";
import heroBg from "../assets/images/hero_residence_v2_1784149054918.jpg";
import poolImg from "../assets/images/piscine_interieure_v2_1784149293308.jpg";
import { useTranslation } from "../contexts/LanguageContext";

export function Hero() {
  const { t } = useTranslation();

  return (
    <div id="hero" className="w-full">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="https://cf.bstatic.com/xdata/images/hotel/max1024x768/671454891.jpg?k=467801a704f558c0c1bd026bc50d3944bebdeec2c13e40ed86af5bbf59e16c5a&o="
        mediaAlt="Vue sur la Résidence Ulysse Djerba avec ses jardins et son architecture djerbienne"
        bgImageSrc="https://cf.bstatic.com/xdata/images/hotel/max1024x768/583697328.jpg?k=110ef944d1f256ba3f5ed20b7aa6e4436f68750ded8a5e22ac69ec8eab2149a3&o="
        bgImageAlt="Intérieur de la suite Ulysse avec un lit double et un coin salon"
        title="Résidence Ulysse"
        date={t("hero.subtitle")}
        scrollToExpand={t("hero.scroll")}
        textBlend={false}
      />
    </div>
  );
}
