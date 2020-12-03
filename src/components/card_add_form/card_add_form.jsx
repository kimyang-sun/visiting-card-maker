import React, { useRef } from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_add_form.module.css";

const CardAddForm = ({ onAddCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const themeRef = useRef();

  const onSubmit = event => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      theme: themeRef.current.value || "",
      fileName: "",
      fileURL: "",
    };
    formRef.current.reset();
    onAddCard(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="Company"
      />
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
      ></textarea>
      <div className={styles.editFoot}>
        <select ref={themeRef} className={styles.select} name="theme">
          <option selected>light</option>
          <option>dark</option>
          <option>sky</option>
          <option>orange</option>
        </select>
        <ImageFileInput></ImageFileInput>
        <Button name="Add" onClick={onSubmit}></Button>
      </div>
    </form>
  );
};

export default CardAddForm;
