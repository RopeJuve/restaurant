import styles from "../styles/reservation.module.css";
import { useRouter } from "next/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faCalendarXmark,
} from "@fortawesome/free-regular-svg-icons";
import Room from "../components/Room/Room";

library.add(faCalendarCheck, faCalendarXmark);

const Reservation = () => {
  const router = useRouter();
  const { checkIn, checkOut, adults, numChildren } = router.query;

  return (
    <div className={styles.background}>
      <h1>RESERVATION</h1>
      <Room />
      <form className={styles.form}>
      
        <div className={styles.inputContainer}>
          <label>First Name:</label>
          <div className={styles.containerInput}>
            <input className={styles.input} type="text" />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Last Name:</label>
          <div className={styles.containerInput}>
            <input className={styles.input} type="text" />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Check In:</label>
          <div className={styles.containerInput}>
            <input
              className={styles.input}
              type="date"
              defaultValue={checkIn}
            />
            <FontAwesomeIcon icon={faCalendarCheck} className={styles.icon} />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Check Out:</label>
          <div className={styles.containerInput}>
            <input
              className={styles.input}
              type="date"
              defaultValue={checkOut}
            />
            <FontAwesomeIcon icon={faCalendarXmark} className={styles.icon} />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Adults:</label>
          <div className={styles.containerInput}>
            <select className={styles.inputSelect} defaultValue={adults}>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Children:</label>
          <div className={styles.containerInput}>
            <select className={styles.inputSelect} defaultValue={numChildren}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className={styles.button}
          onClick={(e) => submitHandler(e)}
        >
          BOOK NOW
        </button>
      </form>
      <div className={styles.container}></div>
    </div>
  );
};

export default Reservation;
