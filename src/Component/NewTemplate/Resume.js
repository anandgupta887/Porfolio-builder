import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school} className="mb-5">
            <h3 className="text-3xl font-bold">{education.school}</h3>
            <p className="info text-gray-500 italic">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p className="text-gray-500 italic">{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company} className="mb-5">
            <h3 className="text-3xl font-bold">{work.company}</h3>
            <p className="info text-gray-500 italic">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p className="text-gray-500 italic">{work.description}</p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <p className="uppercase font-bold my-2 text-wider">{skills.name}</p>
            <div className="bg-[#ccc] h-8 w-[500px] relative">
              <div
                className="h-8 bg-[#313131]"
                style={{ width: skills.level }}
              ></div>
            </div>
            <span style={{ width: skills.level }} className={className}></span>
          </li>
        );
      });
    }

    return (
      <section id="resume" className="p-20 mx-auto gap-5">
        <div className="row education flex">
          <div className="three columns header-col w-48">
            <h1>
              <span className="text-xl font-bold border-b-[3px] border-[#2AABB0]">
                Education
              </span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work flex">
          <div className="three columns header-col w-48">
            <h1>
              <span className="text-xl font-bold border-b-[3px] border-[#2AABB0]">
                Work
              </span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill flex" id="skills">
          <div className="three columns header-col w-48">
            <h1>
              <span className="text-xl font-bold border-b-[3px] border-[#2AABB0]">
                Skills
              </span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {/* <p>{skillmessage}</p> */}

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
