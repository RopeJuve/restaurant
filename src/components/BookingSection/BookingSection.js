import styles from "./BookingSection.module.css";

function BookingSection() {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label>Check In:</label>
        <div className={styles.containerInput}>
          <input className={styles.input} type="datetime-local" />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <label>Check Out:</label>
        <div className={styles.containerInput}>
          <input className={styles.input} type="datetime-local" />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <label>Adults:</label>
        <div className={styles.containerInput}>
          <input className={styles.input} type="number" />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <label>Children:</label>
        <div className={styles.containerInput}>
          <input className={styles.input} type="number" />
        </div>
      </div>
      <button className={styles.button}>BOOK NOW</button>
    </div>
  );
}

export default BookingSection;
