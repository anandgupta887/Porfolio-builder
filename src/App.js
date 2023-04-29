import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import ChooseTemplate from "./Component/ChooseTemplate/ChooseTemplate";
import Register from "./Component/Register/Register";
import PersonalDetails from "./Component/FillDetails/PersonalDetail";
import Skills from "./Component/FillDetails/Skills";
import Experience from "./Component/FillDetails/Experience";
import ProjectDetails from "./Component/FillDetails/ProjectDetails";
import ResumeBody from "./Component/Resume/Body";
import Education from "./Component/FillDetails/Education";
import Template from "./Component/Template/Template";
import { useSelector } from "react-redux";
import TemplateHandler from "./Component/TemplateRoot/TemplateHandler";

function App() {
  const userDetails = useSelector((state) => state);
  console.log(userDetails);

  return (
    <div style={{ margin: "1rem" }}>
      <Router>
        <Switch>
          <Route path="/choose-template">
            <ChooseTemplate />
          </Route>
          <Route path="/template">
            <Template />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/personal-details">
            <PersonalDetails />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/project-details">
            <ProjectDetails />
          </Route>
          <Route path="/resume">
            <ResumeBody />
          </Route>
          <Route path="/portfolio/:username">
            <TemplateHandler browse />
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
