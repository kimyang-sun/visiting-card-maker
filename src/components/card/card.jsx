import React, { forwardRef, useEffect } from 'react';
import styles from './card.module.css';

const Card = forwardRef(({ card }, ref) => {
  const DEFAULT_IMG = '/images/default.png';
  const {
    name,
    company,
    theme,
    title,
    email,
    message,
    fileName,
    fileURL,
    id,
  } = card;
  const url = fileURL || DEFAULT_IMG;

  return (
    <li ref={ref} id={id} className={`${styles.card} ${getThemeType(theme)}`}>
      <div className={styles.cardHead}>
        <img src={url} alt={fileName} className={styles.headImg} />
        <div className={styles.headText}>
          <p className={styles.name}>{name}</p>
          <p className={styles.company}>{company}</p>
        </div>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{`"${message}"`}</p>
      </div>
    </li>
  );
});

function getThemeType(theme) {
  switch (theme) {
    case 'light':
      return styles.light;
    case 'dark':
      return styles.dark;
    case 'sky':
      return styles.sky;
    case 'orange':
      return styles.orange;
    default:
      throw new Error(`not theme ${theme}`);
  }
}

export default React.memo(Card);
