import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import logo from "../../assets/images/logo1.png";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faBars);

function NavBar() {
  const { t } = useTranslation();
  const [isScrool, setIsScrool] = useState(false);
  const [toggleHamMenu, settoggleHamMenu] = useState(false);

  const hamMenuList = () => {
    settoggleHamMenu(!toggleHamMenu);
  };

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
        <Image src={logo.src} alt="logo" width={200} height={40} />
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
      <FontAwesomeIcon icon={faBars} className={styles.hamMenu} onClick={hamMenuList} />
      <div className={toggleHamMenu ? styles.hamMenuList : styles.inactive}>
        <div className={styles.closeContainer}>
          <button className={styles.closeButton} onClick={() => settoggleHamMenu(!toggleHamMenu)}>X</button>
        </div>
        <ul className={styles.list}>
        <li  onClick={() => settoggleHamMenu(!toggleHamMenu)}>
          <Link href="/" >{`${t("navbar.home")}`}</Link>
        </li>
        <li onClick={() => settoggleHamMenu(!toggleHamMenu)}>
          <Link href="/#aboutus">{`${t("navbar.aboutUs")}`}</Link>
        </li>
          <li>ROOMS</li>
          <li>RESERVATION</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
