import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home";
import profile from "./image/images.png";
import email from "./image/image2.png";
import pass from "./image/password.png";

function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="img">
            <div className="container-image">
              <img src={profile} alt="profile" />

            </div>
            </div>

           <div>
              <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email"/> 
              <input type="text" placeholder="user name" className="name"/>
             </div>
             <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
            <input type="text" placeholder="user name" className="name"/>
            </div>
            <div className="login-buttom">
            <button>Login</button>
            </div>

  </div>
        </div>
      </div>
    </div>
    /*<Router>
        <Switch>
          <Route path="/"><Home /></Route>
        </Switch>
  </Router></>*/

  );
}

export default App;
