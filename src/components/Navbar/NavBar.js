import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import logo from "../../assets/images/logo.png";

function NavBar() {
  const [isScrool, setIsScrool] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 150) {
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
        <Image src={logo.src} alt="logo" width={150} height={150} />
      </div>
      <ul className={styles.menuContainer}>
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>ROOMS</li>
        <li>RESERVATION</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
}

export default NavBar;
