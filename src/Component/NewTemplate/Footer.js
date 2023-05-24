import React, { Component } from "react";

function Footer(props) {
  if (props.data) {
    var networks = props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <footer className="p-5 bg-[#0F0F0F]">
      <div id="go-top">
        <a
          className="smoothscroll flex justify-center"
          title="Back to Top"
          href="#home"
        >
          <i className="ri-arrow-up-circle-fill text-[50px] text-[#636363] rounded-full"></i>
        </a>
      </div>
      <div className="row mt-10">
        <div className="twelve columns">
          <ul className="social-links flex justify-center gap-5 text-2xl">
            {networks}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
