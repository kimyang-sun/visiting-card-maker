import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({
  cards,
  onAddCard,
  updateCard,
  deleteCard,
  FileInput,
  Download,
  downloadCard,
}) => {
  return (
    <div className={styles.editor}>
      <h2>Card Edit</h2>
      <div className={styles.forms}>
        {Object.keys(cards).map(key => (
          <CardEditForm
            key={key}
            card={cards[key]}
            updateCard={updateCard}
            deleteCard={deleteCard}
            FileInput={FileInput}
            Download={Download}
            downloadCard={downloadCard}
          />
        ))}
        <CardAddForm onAddCard={onAddCard} FileInput={FileInput}></CardAddForm>
      </div>
    </div>
  );
};

export default Editor;
