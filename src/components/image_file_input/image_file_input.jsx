import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = props => {
  return (
    <button className={styles.button}>
      img
      <FontAwesomeIcon icon="upload" className={styles.icon}></FontAwesomeIcon>
    </button>
  );
};

export default ImageFileInput;
