import React, { Component } from "react";

import Banner from "./images/header-background.jpg";
class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i
                className={`${network.className} text-2xl hover:text-[#F06000] ease-in-out duration-300`}
              ></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav className="w-full">
          <ul className="flex justify-center gap-5">
            <li>
              <a
                className="font-bold uppercase text-sm hover:text-[#F06000]"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="font-bold uppercase text-sm hover:text-[#F06000]"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="font-bold uppercase text-sm hover:text-[#F06000]"
                href="#resume"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                className="font-bold uppercase text-sm hover:text-[#F06000]"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="font-bold uppercase text-sm hover:text-[#F06000]"
                href="#portfolio"
              >
                Works
              </a>
            </li>
            <li>
              <a
                className="font-bold uppercase text-sm hover:text-[#F06000]"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="bg-gray-300 h-inherit relative">
          <img src={Banner} alt="banner" />
          <div className="absolute top-48 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center text-white">
            <h1 className="text-[80px] text-white">I'm {name}.</h1>
            <h3 className="text-md text-white tracking-wide border-b border-white">
              I'm a {city} based <span>{occupation}</span>. {description}.
            </h3>
            <ul className="flex my-10 gap-5">{networks}</ul>
          </div>
        </div>

        <p className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <a className="smoothscroll" href="#about">
            <i className="ri-arrow-down-circle-fill text-[50px] text-white"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
