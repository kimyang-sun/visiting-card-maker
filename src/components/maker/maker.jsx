import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./maker.module.css";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
      id: "3",
      name: "kim",
      company: "Undetermined",
      theme: "sky",
      title: "FrontEnd Engineer",
      email: "cpo91@naver.com",
      message: "FrontEnd Study!",
      fileName: "kims",
      fileURL: "thinking.png",
    },
    {
      id: "4",
      name: "kim",
      company: "Undetermined",
      theme: "orange",
      title: "FrontEnd Engineer",
      email: "cpo91@naver.com",
      message: "FrontEnd Study!",
      fileName: "kims",
      fileURL: "thinking.png",
    },
  ]);

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

  return (
    <section className={styles.container}>
      <Header onLogout={onLogout} />
      <div className={styles.maker}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
