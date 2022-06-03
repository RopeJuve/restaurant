import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import { useTranslation } from "next-i18next";
import Link from "next/link";

function NavBar() {
  const { t } = useTranslation();
  const [isScrool, setIsScrool] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setIsScrool(true);
    } else {
      setIsScrool(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [isScrool]);

  return (
    <div className={isScrool ? styles.navBarScrool : styles.navbarContainer}>
      <div className={isScrool ? styles.scrollogo : styles.logo}>
        <Image src={logo.src} alt="logo" width={100} height={100} />
      </div>
      <ul
        className={isScrool ? styles.menuContainerScrool : styles.menuContainer}
      >
        <li>
          <Link href="/">{`${t("navbar.home")}`}</Link>
        </li>
        <li>
          <Link href="/#aboutus">{`${t("navbar.aboutUs")}`}</Link>
        </li>
        <li>{`${t("navbar.rooms")}`}</li>
        <li>{`${t("navbar.reservation")}`}</li>
        <li>{`${t("navbar.contact")}`}</li>
      </ul>
    </div>
  );
}

export default NavBar;
