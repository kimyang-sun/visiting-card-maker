import styles from "./app.module.css";
import Login from "./components/login/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Maker from "./components/maker/maker";
import {
  faAddressCard,
  faUnlockAlt,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faAddressCard, faUnlockAlt, faUpload);

function App({ authService, FileInput }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} FileInput={FileInput} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
