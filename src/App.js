import React from "react";
import "./App.css";
import Column from "./column/Column";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from "./Login/Login";
import AddCloth from "./AddCloth/AddCloth";
import BuyClothView from "./Cloth/BuyClothView";
import Auth from "./Login/Auth";
import HistorClothView from "./Cloth/HistoryClothView"
import CameraView from "./Camera/CameraView";
import NewUser from "./Login/NewUser";
import Navbar from "./Layout/Navbar";
import Home from "./Home/Home";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={NotLoginHome}/>
          <Route component={Default}/>
        </Switch>
      </Router>
    </>
  );
}

// 未ログインユーザーがまずアクセスするページ
function NotLoginHome() {
  return (
    <Route exact path="/" component={Home} />
  );
}

// ログイン後のユーザーがアクセスするページ
function Default() {
  return (
    <>
      <Navbar/>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/new">
        <NewUser />
      </Route>
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
          <Route path="/column">
            <Column />
          </Route>
        </Switch>
      </Auth>
    </>
  );
}


function Main() {
  return <h2>Main</h2>;
}

export default App;
