import React, { useContext } from "react";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";
import bgImg from "../../resource/img/meals.jpg";


const Header = () => {



  return (
    <div>
      <div className={styles['main-image']}>
        <img src={bgImg} />
      </div>
      <div className={styles.header}>
        <div>
          <h1>ReactMeals</h1>
        </div>
          <HeaderCartButton/>
      </div>
    </div>
  );
};

export default Header;
