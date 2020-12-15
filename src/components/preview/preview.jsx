import React, { forwardRef } from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = forwardRef(({ cards }, ref) => {
  return (
    <div className={styles.preview}>
      <h2>Card Preview</h2>
      <ul className={styles.cards}>
        {Object.keys(cards).map((key, i) => (
          <Card ref={el => (ref.current[i] = el)} key={key} card={cards[key]} />
        ))}
      </ul>
    </div>
  );
});

export default Preview;
