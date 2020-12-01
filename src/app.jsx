import styles from "./app.module.css";
import Login from "./components/login/login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faAddressCard, faUnlockAlt);

function App({ authService }) {
  return (
    <div className={styles.app}>
      <Login authService={authService}></Login>
    </div>
  );
}

export default App;
