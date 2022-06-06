import Image from "next/image";
import Backround from "../../assets/images/tische-gedeckt-rosen.jpg";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.background}>
      {children}
      <div className={styles.image}>
        <Image
          src={Backround.src}
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
export default Layout;
