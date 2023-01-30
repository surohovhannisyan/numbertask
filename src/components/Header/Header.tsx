import React, { useContext, useEffect } from "react";

import { Context, ContextTypes } from "../../context/AppContext";

import styles from "./Header.module.scss";

const Header = () => {
  const { numArray, addItem, sortCards } = useContext(Context) as ContextTypes;

  useEffect(() => {
    if (numArray?.length > 0) {
      sessionStorage.setItem("numbers", JSON.stringify(numArray));
    }
  }, [numArray]);

  return (
    <div className={styles.headerWrapper}>
      <button className={styles.addBtn} onClick={addItem} type="button">
        Add Card
      </button>
      <button className={styles.sortBtn} onClick={sortCards} type="button">
        Sort Cards
      </button>
    </div>
  );
};

export default Header;
