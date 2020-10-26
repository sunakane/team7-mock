import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import Login from "./Login/Login";
import AddCloth from "./AddCloth/AddCloth";
import BuyClothView from "./Cloth/BuyClothView";
import Auth from "./Login/Auth";
import HistorClothView from "./Cloth/HistoryClothView"
import CameraView from "./Camera/CameraView";
import NewUser from "./Login/NewUser";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/new">新規登録</Link>
            </li>
            <li>
              <Link to="/main">Main</Link>
            </li>
            <li>
              <Link to="/add_cloth">服の追加</Link>
            </li>
            <li>
              <Link to="/buy_cloth">服の購入</Link>
            </li>
            <li>
              <Link to="/history_cloth">購入履歴</Link>
            </li>
            <li>
              <Link to="/camera">AIコーデ判定</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/new">
            <NewUser />
          </Route>
        </Switch>
        {/* Auth以下はログインしているときだけ表示される */}
        <Auth>
          <Switch>
            <Route path="/main">
              <Main />
            </Route>
            <Route path="/add_cloth">
              <AddCloth />
            </Route>
            <Route path="/buy_cloth">
              <BuyClothView />
            </Route>
            <Route path="/history_cloth">
              <HistorClothView />
            </Route>
            <Route path="/camera">
              <CameraView />
            </Route>
          </Switch>
        </Auth>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Main() {
  return <h2>Main</h2>;
}

export default App;
