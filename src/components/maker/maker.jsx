import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./maker.module.css";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "kim",
      company: "Undetermined",
      theme: "light",
      title: "FrontEnd Engineer",
      email: "cpo91@naver.com",
      message: "FrontEnd Study!",
      fileName: "kims",
      fileURL: "thinking.png",
    },
    2: {
      id: "2",
      name: "kim",
      company: "Undetermined",
      theme: "dark",
      title: "FrontEnd Engineer",
      email: "cpo91@naver.com",
      message: "FrontEnd Study!",
      fileName: "kims",
      fileURL: "thinking.png",
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addOrupdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.container}>
      <Header onLogout={onLogout} />
      <div className={styles.maker}>
        <Editor
          cards={cards}
          onAddCard={addOrupdateCard}
          updateCard={addOrupdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
