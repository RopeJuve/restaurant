import styles from "./BookingSection.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faCalendarXmark,
} from "@fortawesome/free-regular-svg-icons";
library.add(faCalendarCheck, faCalendarXmark);
function BookingSection() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <label>Check In:</label>
          <div className={styles.containerInput}>
            <input className={styles.input} type="date" />
            <FontAwesomeIcon icon={faCalendarCheck} className={styles.icon} />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Check Out:</label>
          <div className={styles.containerInput}>
            <input className={styles.input} type="date" />
            <FontAwesomeIcon icon={faCalendarXmark} className={styles.icon} />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Adults:</label>
          <div className={styles.containerInput}>
            <select class={styles.inputSelect}>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Children:</label>
          <div className={styles.containerInput}>
            <select class={styles.inputSelect}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <button type="submit" className={styles.button}>
          BOOK NOW
        </button>
      </form>
    </div>
  );
}

export default BookingSection;
