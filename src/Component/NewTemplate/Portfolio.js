import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        // var projectImage = "./images/portfolio/" + projects.image;
        var projectImage = projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a
                href={projects.url}
                title={projects.title}
                className="relative"
              >
                <img alt={projects.title} src={projectImage} className="h-32" />
                <div className="overlay absolute bottom-0 w-full flex flex-col justify-center items-center h-32 bg-gradient-to-t from-slate-900 via-slate-700 opacity-0 hover:opacity-100 duration-300">
                  <div className="portfolio-item-meta flex flex-col justify-center items-center">
                    <h5 className="text-sm uppercase font-bold text-white">
                      {projects.title}
                    </h5>
                    <p className="text-xs text-white font-thin">
                      {projects.category}
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
}

export default Portfolio;
