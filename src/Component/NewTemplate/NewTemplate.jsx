import React, { useState, useEffect } from "react";
// import ReactGA from "react-ga";
import $ from "jquery";

import "./new-template.css";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

function NewTemplate() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    const getResumeData = () => {
      $.ajax({
        url: "/resumeData.json",
        dataType: "json",
        cache: false,
        success: function (data) {
          setResumeData(data);
        },
        error: function (xhr, status, err) {
          console.log(err);
          alert(err);
        },
      });
    };

    getResumeData();
  }, []);

  return (
    <div className="new-template">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
}

export default NewTemplate;
