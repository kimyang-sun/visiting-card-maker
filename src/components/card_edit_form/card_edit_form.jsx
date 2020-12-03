import React from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ card }) => {
  const {
    name,
    company,
    theme,
    title,
    email,
    message,
    fileName,
    fileURL,
  } = card;

  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        placeholder="Name"
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        placeholder="Company"
      />
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        placeholder="Title"
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        placeholder="Email"
      />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
      ></textarea>
      <div className={styles.editFoot}>
        <select className={styles.select} name="theme" value={theme}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="sky">Sky</option>
          <option value="orange">Orange</option>
        </select>
        <ImageFileInput></ImageFileInput>
        <Button name="Delete" onClick={onSubmit}></Button>
      </div>
    </form>
  );
};

export default CardEditForm;
