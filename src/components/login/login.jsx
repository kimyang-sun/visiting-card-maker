import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const onLogin = event => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log);
  };
  return (
    <section className={styles.container}>
      <Header></Header>
      <div className={styles.login}>
        <h2 className={styles.title}>Login</h2>
        <ul className={styles.list}>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Facebook</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Login;
