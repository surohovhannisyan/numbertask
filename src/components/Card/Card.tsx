import React, { FC, useContext } from "react";

import { FaRegTimesCircle } from "react-icons/fa";
import { Context, ContextTypes } from "../../context/AppContext";

import styles from "./Card.module.scss";

type CardPropsTypes = {
  number: number;
};

const Card: FC<CardPropsTypes> = ({ number }) => {
  const { setSelectedNumber } = useContext(Context) as ContextTypes;

  const deleteCardHandler = () => {
    setSelectedNumber(number);
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.deleteIcon}>
        <FaRegTimesCircle className={styles.icon} onClick={deleteCardHandler} />
      </div>
      <div className={styles.number}>{number}</div>
    </div>
  );
};

export default Card;
