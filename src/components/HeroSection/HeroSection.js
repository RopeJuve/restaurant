import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <h3>Welcome to hotel</h3>
      <h1>
        WE ARE ALWAYS THE <br /> RIGHT CHOICE
      </h1>
      <div className={styles.line}></div>

      <button className={styles.button}>Book Now</button>
    </div>
  );
};

export default HeroSection;
