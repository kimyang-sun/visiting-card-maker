import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ cards, onAddCard }) => {
  return (
    <div className={styles.editor}>
      <h2>Card Edit</h2>
      <div className={styles.forms}>
        {cards.map(card => (
          <CardEditForm key={card.id} card={card} />
        ))}
        <CardAddForm onAddCard={onAddCard}></CardAddForm>
      </div>
    </div>
  );
};

export default Editor;
