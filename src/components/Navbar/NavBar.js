import styles from "./NavBar.module.css";
import Layout from "../Layout/Layout";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import HeroSection from "../HeroSection/HeroSection";
import { useTranslation } from "next-i18next";

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.navbarContainer}>
          <div className={styles.logo}>
            <Image src={logo.src} alt="logo" width={150} height={150} />
          </div>
          <ul className={styles.menuContainer}>
            <li>{`${t("navbar.home")}`}</li>
            <li>{`${t("navbar.aboutUs")}`}</li>
            <li>{`${t("navbar.rooms")}`}</li>
            <li>{`${t("navbar.reservation")}`}</li>
            <li>{`${t("navbar.contact")}`}</li>
          </ul>
        </div>
      </div>
      <HeroSection />
    </Layout>
  );
};

export default NavBar;
