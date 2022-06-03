import styles from "./Footer.module.css";
import Image from "next/image";
import Instagram from "../../assets/images/socialMedia/instagram.png";
import Facebook from "../../assets/images/socialMedia/facebook.png";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.icon}>
          <Image src={Facebook.src} alt="facebook" width={25} height={25} />
        </div>
        <div className={styles.icon}>
          <Image src={Instagram.src} alt="instagram" width={25} height={25} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
