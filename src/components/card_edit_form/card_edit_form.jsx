import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({
  card,
  updateCard,
  deleteCard,
  FileInput,
  Download,
  downloadCard,
}) => {
  const { name, company, theme, title, email, message, fileName } = card;

  const onFileChange = file => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = event => {
    if (event.currentTarget == null) return;
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <form className={styles.form}>
      <Download card={card} downloadCard={downloadCard} />
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        placeholder="Name"
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        placeholder="Company"
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        placeholder="Title"
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        placeholder="Email"
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        onChange={onChange}
        placeholder="Comment"
      ></textarea>
      <div className={styles.editFoot}>
        <select
          className={styles.select}
          name="theme"
          value={theme}
          onChange={onChange}
        >
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="sky">sky</option>
          <option value="orange">orange</option>
        </select>
        <FileInput name={fileName} onFileChange={onFileChange} />
        <Button name="Delete" onClick={() => deleteCard(card)}></Button>
      </div>
    </form>
  );
};

export default React.memo(CardEditForm);
