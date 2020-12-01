import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <FontAwesomeIcon icon="address-card" className={styles.card} />
        Visiting Card Maker
        {onLogout && (
          <button className={styles.logout}>
            <FontAwesomeIcon icon="unlock-alt" />
          </button>
        )}
      </h1>
    </header>
  );
};

export default Header;
