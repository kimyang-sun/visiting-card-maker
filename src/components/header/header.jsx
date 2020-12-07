import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  const addressIcon = useMemo(
    () => <FontAwesomeIcon icon="address-card" className={styles.card} />,
    []
  );
  const unlockIcon = useMemo(() => <FontAwesomeIcon icon="unlock-alt" />, []);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        {addressIcon}
        Visiting Card Maker
        {onLogout && (
          <button onClick={onLogout} className={styles.logout}>
            {unlockIcon}
          </button>
        )}
      </h1>
    </header>
  );
};

export default React.memo(Header);
