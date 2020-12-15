import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useMemo, useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const noImg = useMemo(
    () => (
      <span>
        No Image
        <FontAwesomeIcon icon="upload" className={styles.icon} />
      </span>
    ),
    []
  );

  const [loading, setLoading] = useState(false);

  const inputRef = useRef('null');
  const onButtonClick = event => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async event => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.secure_url,
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
      {!loading && (
        <button
          className={`${styles.button} ${name && styles.uploaded}`}
          onClick={onButtonClick}
        >
          {name || noImg}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default React.memo(ImageFileInput);
