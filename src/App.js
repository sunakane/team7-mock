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
import Main from "./Main/Main";
import HighCorde from "./HighCorde/HighCordeView"
import AiHighCorde from "./AiHighCorde/AiHighCorde"


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={NotLoginHome}/>
          <Route exact path="/login" component={NotLoginHome}/>
          <Route exact path="/new" component={NotLoginHome}/>
          <Route component={Default}/>
        </Switch>
      </Router>
    </>
  );
}

// 未ログインユーザーがまずアクセスするページ
function NotLoginHome() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/new" component={NewUser} />
    </>
  );
}

// ログイン後のユーザーがアクセスするページ
function Default() {
  return (
    <>
      <Navbar/>
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
          <Route path="/high_corde">
            <HighCorde />
          </Route>
          <Route path="/ai_high_corde">
            <AiHighCorde />
          </Route>
        </Switch>
      </Auth>
    </>
  );
}

export default App;
