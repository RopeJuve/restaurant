import styles from "./NavBar.module.css";
import Layout from "../Layout/Layout";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import HeroSection from "../HeroSection/HeroSection";

function NavBar() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.navbarContainer}>
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
      </div>
      <HeroSection />
    </Layout>
  );
}

export default NavBar;
