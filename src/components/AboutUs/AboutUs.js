import styles from "./AboutUs.module.css";
import { useTranslation } from "next-i18next";

function BookingSection() {
  const { t } = useTranslation();
  return (
    <div id="aboutus" className={styles.container}>
      <h1 className={styles.h1}>{`${t("aboutus.titel")}`}</h1>
      <div className={styles.line}></div>
      <p className={styles.p}>
        lorem ipsum dolor sit amet consectetur adipiscing elit finibus auctor
        vestibulum varius velit sociosqu ad at hendrerit pulvinar eleifend
        ullamcorper cursus venenatis aptent molestie suscipit a aliquet egestas
        maecenas quis litora pretium facilisi massa class nostra felis tortor
        curae ligula tristique mattis lobortis consequat efficitur rhoncus odio
        vivamus ex tellus semper convallis cubilia nascetur non justo nam ante
        luctus sapien eros est phasellus porta risus sollicitudin sagittis nisl
        metus neque integer laoreet viverra primis eu senectus nulla et sodales
        sed lacus erat iaculis gravida dapibus posuere habitasse in pellentesque
        nullam magna elementum imperdiet fames aliquam suspendisse id himenaeos
        orci maximus torquent malesuada accumsan diam habitant aenean dignissim
        ultrices rutrum ridiculus vitae placerat leo tincidunt potenti commodo
        ac montes euismod mollis dui donec tempor magnis turpis ornare hac
        scelerisque ut parturient vel platea faucibus taciti nec augue dictumst
        vehicula condimentum feugiat quam mauris libero congue natoque bibendum
        mus nisi fringilla conubia purus dictum nibh proin nunc tempus etiam
        lectus mi volutpat enim inceptos interdum blandit duis lacinia per morbi
        fermentum praesent urna vulputate dis curabitur arcu facilisis eget
        quisque ornare amet lacinia torquent ut urna cursus tortor aenean quis
        id iaculis nibh platea magna gravida est himenaeos placerat proin nisl
        mollis
      </p>
    </div>
  );
}

export default BookingSection;
