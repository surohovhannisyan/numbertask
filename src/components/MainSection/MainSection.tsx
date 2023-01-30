import React, { useContext } from "react";

import Card from "../Card/Card";

import { Context, ContextTypes } from "../../context/AppContext";

import styles from "./MainSection.module.scss";

const MainSection = () => {
  const { numArray } = useContext(Context) as ContextTypes;

  return (
    <div className={styles.mainSectionWrapper}>
      <div className={styles.cardsWrapper}>
        {numArray?.map((item: number) => (
          <Card number={item} key={item} />
        ))}
      </div>
      <div className={styles.instructionsWrapper}>Instructions</div>
    </div>
  );
};

export default MainSection;
