import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Column from "./column/Column";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/column">column</Link>
          </li>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/column">
           <Column/>
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
