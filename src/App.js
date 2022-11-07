import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import ChooseTemplate from "./Component/ChooseTemplate/ChooseTemplate";
import Register from "./Component/Register/Register";

function App() {
  return (
    <div style={{ margin: "1rem" }}>
      <Router>
        <Switch>
          <Route path="/choose-template">
            <ChooseTemplate />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/personal-details">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
