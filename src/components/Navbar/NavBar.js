import { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import logo from "../../assets/images/logo.png";

function NavBar() {
  const [isScrool, setIsScrool] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrolling = window.scrollY > 0;
      if (scrolling) {
        setIsScrool(true);
      } else {
        setIsScrool(false);
      }
    });
  }, []);

  return (
  
      <div className={isScrool ? styles.navBarScrool : styles.navbarContainer}>
        <div className={styles.logo}>
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
