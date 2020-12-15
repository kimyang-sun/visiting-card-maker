import React, { useRef, useState } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = ({ onAddCard, FileInput }) => {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const titleRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const themeRef = useRef(null);
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = file => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      theme: themeRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
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
        placeholder="Comment"
      ></textarea>
      <div className={styles.editFoot}>
        <select
          ref={themeRef}
          className={styles.select}
          name="theme"
          defaultValue="light"
        >
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="sky">sky</option>
          <option value="orange">orange</option>
        </select>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
        <Button name="Add" onClick={onSubmit}></Button>
      </div>
    </form>
  );
};

export default React.memo(CardAddForm);
