import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const icon = (
    <FontAwesomeIcon icon="upload" className={styles.icon}></FontAwesomeIcon>
  );
  const inputRef = useRef("null");
  const onButtonClick = event => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = event => {
    imageUploader
      .upload(event.target.files[0]) //
      .then(uploaded => {
        onFileChange({
          name: uploaded.original_filename,
          url: uploaded.url,
        });
      });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || "no img"}
      </button>
    </div>
  );
};

export default ImageFileInput;
