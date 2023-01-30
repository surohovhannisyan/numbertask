import React from "react";

import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";
import Footer from "../Footer/Footer";

import styles from "./AppLayout.module.scss";

const AppLayout = () => (
  <div className={styles.appWrapper}>
    <Header />
    <MainSection />
    <Footer />
  </div>
);

export default AppLayout;
