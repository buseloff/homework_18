import React from "react";
import PropTypes from "prop-types";
import styles from "./Day.module.scss";
import { format } from "date-fns";

const Day = ({ currentDate }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>{format(currentDate, "iiii")}</div>
      <div className={styles.number}>{format(currentDate, "d")}</div>
    </div>
  );
};

Day.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
};

export default Day;
