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
import Navbar from "./Layout/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Router>
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
    </Router>
    </>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Main() {
  return <h2>Main</h2>;
}

export default App;
