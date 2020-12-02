import styles from "./app.module.css";
import Login from "./components/login/login";
import { faAddressCard, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Maker from "./components/maker/maker";
library.add(faAddressCard, faUnlockAlt);

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
