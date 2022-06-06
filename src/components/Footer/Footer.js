import styles from "./Footer.module.css";
import Image from "next/image";
import logo from "../../assets/images/logo1.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faInstagram, faFacebook, faTwitter);

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" height={40} width={200} />
        </div>
        <div className={styles.text}>
          <p>
            lorem ipsum dolor sit amet consectetur adipiscing elit finibus
            auctor vestibulum varius velit sociosqu ad at hendrerit pulvinar
            eleifend ullamcorper cursus venenatis aptent molestie suscipit a
            aliquet egestas maecenas quis litora pretium facilisi massa class
            nostra felis tortor curae ligula tristique mattis lobortis consequat
            efficitur rhoncus odio vivamus ex tellus semper convallis cubilia
            nascetur non
          </p>
        </div>
        <div className={styles.social}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
