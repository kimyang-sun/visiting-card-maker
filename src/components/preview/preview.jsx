import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";

const Preview = ({ cards }) => {
  return (
    <div className={styles.preview}>
      <h2>Card Preview</h2>
      <ul className={styles.cards}>
        {cards.map(card => (
          <Card card={card} />
        ))}
      </ul>
    </div>
  );
};

export default Preview;
