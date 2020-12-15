import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';

const Maker = ({ authService, FileInput, cardRepository, Download }) => {
  const historyState = useHistory().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);
  const cardsRef = useRef([]);
  // you can access the elements with itemsRef.current[n] - useRef를 배열로 만들어서 이용하는 방법!
  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, Object.keys(cards).length);
  }, [cards]);

  // login에서 추가해준 history.state.id 를 이용함
  const history = useHistory();

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    if (!userId) return;
    const completeSync = cardRepository.syncCards(userId, cards => {
      setCards(cards);
    });
    return () => completeSync(); // Unmount때 중지시켜주기 위함 (card_repository.js에서 ref.off()가 실행됨)
  }, [cardRepository, userId]);

  // 로그인 상태가 바뀔때마다 체크해서 id 변경 or 아이디가 user가 없으면 로그인화면으로
  useEffect(() => {
    const completeAuth = authService.onAuthChange(user => {
      user ? setUserId(user.uid) : history.push('/');
    });
    return () => completeAuth(); // Unmount때 중지시켜주기 위함 (auth_service.js에서 unsubscribe()가 실행됨)
  }, [authService, userId, history]);

  const addOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  const downloadCard = cardId => {
    const cardElement = cardsRef.current.find(card => {
      const id = card.getAttribute('id');
      return parseInt(id) === cardId;
    });
    htmlToImage.toPng(cardElement).then(function (dataUrl) {
      download(dataUrl, 'card.png');
    });
  };

  return (
    <section className={styles.container}>
      <Header onLogout={onLogout} />
      <div className={styles.maker}>
        <Editor
          cards={cards}
          onAddCard={addOrUpdateCard}
          updateCard={addOrUpdateCard}
          deleteCard={deleteCard}
          FileInput={FileInput}
          Download={Download}
          downloadCard={downloadCard}
        />
        <Preview cards={cards} ref={cardsRef} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
