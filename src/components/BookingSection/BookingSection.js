import { useState } from "react";
import Router from "next/router";
import styles from "./BookingSection.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faCalendarXmark,
} from "@fortawesome/free-regular-svg-icons";
library.add(faCalendarCheck, faCalendarXmark);

const BookingSection = () => {
  const [resData, setResData] = useState({
    checkIn: "",
    checkOut: "",
    adults: "1",
    children: "0",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    Router.push({
      pathname: "/reservation",
      query: resData,
    });
  };
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <label>Check In:</label>
          <div className={styles.containerInput}>
            <input
              className={styles.input}
              type="date"
              onSelect={(e) =>
                setResData({ ...resData, checkIn: e.target.value })
              }
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
              onSelect={(e) =>
                setResData({ ...resData, checkOut: e.target.value })
              }
            />
            <FontAwesomeIcon icon={faCalendarXmark} className={styles.icon} />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Adults:</label>
          <div className={styles.containerInput}>
            <select
              className={styles.inputSelect}
              onSelect={(e) =>
                setResData({ ...resData, adults: e.target.value })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>Children:</label>
          <div className={styles.containerInput}>
            <select
              className={styles.inputSelect}
              onSelect={(e) =>
                setResData({ ...resData, children: e.target.value })
              }
            >
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
    </div>
  );
};

export default BookingSection;
