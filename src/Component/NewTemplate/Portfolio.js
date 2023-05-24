import React, { Component } from "react";

import React from "react";

function Portfolio(props) {
  if (props.data) {
    var projects = props.data.projects.map(function (project) {
      // var projectImage = "./images/portfolio/" + project.image;
      var projectImage = project.image;
      return (
        <div key={project.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={project.url} title={project.title} className="relative">
              <img alt={project.title} src={projectImage} className="h-32" />
              <div className="overlay absolute bottom-0 w-full flex flex-col justify-center items-center h-32 bg-gradient-to-t from-slate-900 via-slate-700 opacity-0 hover:opacity-100 duration-300">
                <div className="portfolio-item-meta flex flex-col justify-center items-center">
                  <h5 className="text-sm uppercase font-bold text-white">
                    {project.title}
                  </h5>
                  <p className="text-xs text-white font-thin">
                    {project.category}
                  </p>
                </div>
                <div className="link-icon">
                  <i className="ri-links-line text-white"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed flex flex-col items-center">
          <h1 className="uppercase text-wider text-[#95A3A3]">
            Check Out Some of My Works.
          </h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf grid grid-cols-4 gap-4"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
