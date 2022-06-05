import styles from "./HeroSection.module.css";
import { useTranslation } from "next-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h3>{`${t("herosection.titel1")}`}</h3>
      <h1>{`${t("herosection.titel2")}`}</h1>
      <div className={styles.line}></div>

      <button className={styles.button}>{`${t("herosection.book")}`}</button>
    </div>
  );
};

export default HeroSection;
