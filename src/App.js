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
import Achievement from "./Component/FillDetails/Achievement";
import Header from "./Component/Home/Header";

function App() {
  const userDetails = useSelector((state) => state);

  return (
    <Router>
      <Switch>
        <Route path="/choose-template">
          <Header />
          <ChooseTemplate />
        </Route>
        <Route path="/achievement">
          <Header />
          <Achievement />
        </Route>
        <Route path="/template">
          <TemplateHandler />
        </Route>
        <Route path="/login">
          <Header />
          <Login />
        </Route>
        <Route path="/register">
          <Header />
          <Register />
        </Route>
        <Route path="/personal-details">
          <Header />
          <PersonalDetails />
        </Route>
        <Route path="/skills">
          <Header />
          <Skills />
        </Route>
        <Route path="/experience">
          <Header />
          <Experience />
        </Route>
        <Route path="/education">
          <Header />
          <Education />
        </Route>
        <Route path="/project-details">
          <Header />
          <ProjectDetails />
        </Route>
        <Route path="/resume">
          <Header />
          <ResumeBody />
        </Route>
        <Route path="/portfolio/:username">
          <Header />
          <TemplateHandler browse />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
