import styles from "./NavBar.module.css";
import Layout from "../Layout/Layout";
import Image from "next/image";
import logo from "../../assets/images/logo.png";

function NavBar() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo.src} alt="logo" width={200} height={200} />
        </div>
        <div className={styles.navbarContainer}>
          <ul className={styles.menuContainer}>
            <li>HOME</li>
            <li>GALLERY</li>
            <li>MENU</li>
            <li>RESERVATION</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default NavBar;
