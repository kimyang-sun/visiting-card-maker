import styles from './card_download.module.css';
import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardDownload = ({ htmlToImage, card, downloadCard }) => {
  const downLoadButton = useMemo(
    () => (
      <span>
        Download
        <FontAwesomeIcon icon="download" className={styles.icon} />
      </span>
    ),
    []
  );

  const onButtonClick = event => {
    event.preventDefault();
    downloadCard(card.id);
  };

  return (
    <button className={styles.button} onClick={onButtonClick}>
      {downLoadButton}
    </button>
  );
};

export default React.memo(CardDownload);
