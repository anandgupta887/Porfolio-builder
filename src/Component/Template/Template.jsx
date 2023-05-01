import React from "react";
import "./template.css";
import details from "../../details";
import adobePhotoshop2 from "../Template/assets/img/adobe-photoshop-2.svg";
import adobeXD1 from "../Template/assets/img/adobe-xd-1.svg";
import css3 from "../Template/assets/img/css-3.svg";
import favicon from "../Template/assets/img/favicon.png";
import figma1 from "../Template/assets/img/figma-1.svg";
import gitIcon from "../Template/assets/img/git-icon.svg";
import html1 from "../Template/assets/img/html-1.svg";
import invision from "../Template/assets/img/invision.svg";
import logoJavaScript from "../Template/assets/img/logo-javascript.svg";
import profile from "../Template/assets/img/profile.png";
import project1 from "../Template/assets/img/project1.jpg";
import project2 from "../Template/assets/img/project2.jpg";
import project3 from "../Template/assets/img/project3.jpg";
import project4 from "../Template/assets/img/project4.jpg";
import react2 from "../Template/assets/img/react-2.svg";
import shapeCircle from "../Template/assets/img/shape-circle.svg";
import shapeWaves from "../Template/assets/img/shape-waves.svg";
import sketch2 from "../Template/assets/img/sketch-2.svg";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment/moment";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

function Template({ details }) {
  const userId = useSelector((state) => state?.user?.userId);

  const history = useHistory();

  const getSkillLevel = (type) => {
    switch (type) {
      case "1":
        return "Beginner";
      case "2":
        return "Intermediate";
      case "3":
        return "Expert";
      case "4":
        return "Proficient";
      case "5":
        return "Master";
    }
  };

  const getImage = (type) => {
    switch (type) {
      case "HTML":
        return html1;
      case "CSS":
        return css3;
      case "Javascript":
        return logoJavaScript;
      case "React":
        return react2;
      case "Git":
        return gitIcon;
      case "Figma":
        return figma1;
      case "Sketch":
        return sketch2;
      case "Adobe XD":
        return adobeXD1;
      case "InvisionApp":
        return invision;
      case "Photoshop":
        return adobePhotoshop2;
      default:
        return "";
    }
  };

  return (
    <>
      {/* <!--==================== HEADER ====================--> */}
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            {details?.profile?.name}
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="ri-home-5-line"></i> Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="ri-trophy-line"></i> Skills
                </a>
              </li>

              <li className="nav__item">
                <a href="#qualification" className="nav__link">
                  <i className="ri-book-open-line"></i> Qualification
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="ri-briefcase-line"></i> Services
                </a>
              </li>

              <li className="nav__item">
                <a href="#projects" className="nav__link">
                  <i className="ri-image-line"></i> Projects
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="ri-chat-3-line"></i> Contact
                </a>
              </li>
            </ul>

            {/* <!-- Close button --> */}
            <div className="nav__close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__buttons">
            {userId === details?.userId ? (
              <Button
                onClick={() => {
                  history.push("/choose-template");
                }}
              >
                Edit
              </Button>
            ) : (
              <></>
            )}
            {/* <i className="ri-moon-line change-theme" id="theme-button"></i>
            <div className="nav__toggle" id="nav-toggle">
              <i className="ri-menu-4-fill"></i>
            </div> */}
          </div>
        </nav>
      </header>
      {/* <!--==================== MAIN ====================--> */}
      <main className="main">
        {/* <!--==================== HOME ====================--> */}
        <section className="home section" id="home">
          {/* <!-- This 'div' covers the entire 'home' section which comprise of : the centre div, home info 1 div and home info 2 div --> */}
          <div className="home__container container grid section__border">
            {/* <!-- The following 'div' is the centre div which is for home : title, profile pic and social media part clubbed together in a div. --> */}
            <div className="home__data grid">
              <h1 className="home__title">
                {/* <h1>{{ details }.id}</h1> */}
                Hi, I'm {details?.profile?.name} <br />
                {details?.profile?.title} <br />
                Based In {details?.profile?.location} <br />
              </h1>
              {/* <img src="./profile?.png" /> */}
              <div className="home__blob grid">
                <div className="home__profile">
                  <img
                    src={
                      details?.profile?.image
                        ? details?.profile?.image
                        : profile
                    }
                    alt="profile-pic"
                  />
                </div>

                {/* <img src={shapeWaves} alt="" className="home__shape-waves" />
                <img src={shapeCircle} alt="" className="home__shape-waves" /> */}
              </div>

              <ul className="home__social">
                <a
                  href={`https://www.linkedin.com/in/${details?.profile?.linkedIn}`}
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="ri-linkedin-box-line"></i>
                </a>

                <a
                  href={`https://github.com/${details?.profile?.github}`}
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="ri-github-line"></i>
                </a>
              </ul>
            </div>

            {/* <!--==================== HOME INFO 1 ====================--> */}
            <div className="home__info">
              <div>
                <h3 className="home__info-title">BIOGRAPHY</h3>

                <p className="home__info-description">
                  Hi, I'm {details?.profile?.name}, {details?.profile?.title}.
                  Passionate about designing beautiful web interfaces. Based in{" "}
                  {details?.profile?.city}.
                </p>
              </div>

              <div>
                <h3 className="home__info-title">CONTACT</h3>

                <p className="home__info-description">
                  {details?.profile?.name} <br />
                  {details?.profile?.email}
                  <br />
                  {details?.profile?.phone} <br />
                </p>
              </div>

              {/* <div>
                <h3 className="home__info-title">SERVICES</h3>

                <p className="home__info-description">
                  Website Design <br />
                  UI/UX Design <br />
                  Animation <br />
                </p>
              </div> */}
            </div>

            {/* <!--==================== HOME INFO 2 ====================--> */}
            <div className="home__info">
              {/* <div>
                <h3 className="home__info-title">YEARS OF EXPERIENCE</h3>

                <p className="home__info-number">08+</p>
              </div> */}

              <div>
                <h3 className="home__info-title">COMPLETED PROJECTS</h3>

                <p className="home__info-number">{details?.projects?.length}</p>
              </div>

              <div>
                <h3 className="home__info-title">COMPANIES WORKED</h3>

                <p className="home__info-number">
                  {details?.experience?.length}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!--==================== SKILLS ====================--> */}
        <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My favourite skills</span>

          <div className="skills__container container grid section__border">
            <div className="skills__content">
              <div className="skills__info">
                {details?.skills.map((data) => (
                  <div className="skills__data">
                    <div className="skills__blob">
                      <img src={getImage(data?.name)} alt="skills" />
                    </div>

                    <h3 className="skills__name">{data?.name}</h3>
                    <span className="skills__subtitle">
                      {getSkillLevel(data?.level)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* <!--==================== QUALIFICATION ====================--> */}
        <section className="qualification section" id="qualification">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">Experience & Education</span>

          <div className="qualification__container container grid section__border">
            {/* <!--==================== QUALIFICATION 1 ====================--> */}
            <div className="qualification__content">
              <h3 className="qualification__title">
                <i className="ri-pencil-ruler-2-line"></i> Education
              </h3>

              <div className="qualification__info">
                {details?.education?.map((data) => (
                  <div>
                    <h3 className="qualification__name">
                      {data?.degree} in {data?.fieldOfStudy}
                    </h3>
                    <span className="qualification__country">
                      {data?.institution}
                    </span>
                    <span className="qualification__year">{`${moment(
                      data?.from
                    ).format("yyyy")} - ${moment(data?.to).format(
                      "yyyy"
                    )}`}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* <!--==================== QUALIFICATION 2====================--> */}
            <div className="qualification__content">
              <h3 className="qualification__title">
                <i className="ri-building-line"></i> Work
              </h3>

              <div className="qualification__info">
                {details?.experience.map((data) => (
                  <div>
                    <h3 className="qualification__name">{data.title}</h3>
                    <span className="qualification__country">
                      {data.company} {data?.location && "-"} {data?.location}
                    </span>
                    <span className="qualification__year">{`${moment(
                      data?.from
                    ).format("yyyy")} - ${moment(data?.to).format(
                      "yyyy"
                    )}`}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <img
            src="assets/img/shape-circle.svg"
            alt="qualification image"
            className="qualification__img"
          />
        </section>

        {/* <!--==================== SERVICES ====================--> */}
        <section className="services section" id="services">
          <h2 className="section__title">Services</h2>
          <span className="section__subtitle">What I offer</span>

          <div className="services__container container grid section__border">
            <div className="services__card">
              <i className="ri-layout-4-line"></i>

              <h2 className="services__title">
                UI/UX <br />
                Designer
              </h2>

              <p className="services__description">
                {/* Service that provides the best quality and at the request of the
                client, with professional work and customer support. */}
                {details?.projects?.description}
              </p>

              <div className="services__border"></div>
            </div>

            <div className="services__card">
              <i className="ri-code-line"></i>

              <h2 className="services__title">
                Website <br />
                Design
              </h2>

              <p className="services__description">
                Service that provides the best quality and at the request of the
                client, with professional work and customer support.
              </p>

              <div className="services__border"></div>
            </div>

            <div className="services__card">
              <i className="ri-quill-pen-line"></i>

              <h2 className="services__title">
                Digital <br />
                Animator
              </h2>

              <p className="services__description">
                Service that provides the best quality and at the request of the
                client, with professional work and customer support.
              </p>

              <div className="services__border"></div>
            </div>
          </div>
        </section>

        {/* <!--==================== PROJECTS ====================--> */}
        <section className="projects section" id="projects">
          <h2 className="section__title">Projects</h2>
          <span className="section__subtitle">Most recent work</span>

          <div className="container section__border">
            <div className="projects__container swiper">
              <div className="swiper-wrapper">
                {details?.projects.map((data) => (
                  <div className="projects__content swiper-slide">
                    <img
                      src={data?.image ? data?.image : project1}
                      alt="projects image"
                      className="projects__img"
                    />

                    <div>
                      <span className="projects__subtitle">Web</span>
                      <h1 className="projects__title">{data?.title}</h1>

                      <a href={data.link} className="projects__button">
                        View demo <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* <!-- Swiper arrows --> */}
              {/* <div className="swiper-button-next">
                <i className="ri-arrow-right-s-line"></i>
              </div>
              <div className="swiper-button-prev">
                <i className="ri-arrow-left-s-line"></i>
              </div> */}

              {/* <!-- Swiper pagination --> */}
              {/* <div className="swiper-pagination"></div> */}
            </div>
          </div>
        </section>

        {/* <!--==================== TESTIMONIAL ====================--> */}
        {/* <section className="testimonial section"> */}
        {/* <h2 className="section__title">Testimonial</h2>
          <span className="section__subtitle">My client saying</span> */}

        {/* <div className="container section__border"> */}
        {/* <div className="testimonial__container swiper"> */}
        {/* <div className="swiper-wrapper"> */}
        {/* <!--==================== TESTIMONIAL 1 ====================--> */}
        {/* <div className="testimonial__content swiper-slide">
                  <p className="testimonial__description">
                    “Working with {details?.profile?.name} is to give a good
                    impression, I carry out my project at a good cost, with
                    excellent quality and attention. Great service and
                    recommended.”
                  </p>

                  <div>
                    <h3 className="testimonial__name">Klay Harris</h3>
                    <span className="testimonial__subtitle">Client</span>
                  </div>
                </div> */}

        {/* <!--==================== TESTIMONIAL 2 ====================--> */}
        {/* <div className="testimonial__content swiper-slide">
                  <p className="testimonial__description">
                    “Working with {details?.profile?.name} is to give a good
                    impression, I carry out my project at a good cost, with
                    excellent quality and attention. Great service and
                    recommended.”
                  </p>

                  <div>
                    <h3 className="testimonial__name">Mary Lens</h3>
                    <span className="testimonial__subtitle">Client</span>
                  </div>
                </div> */}
        {/* <!--==================== TESTIMONIAL 3 ====================--> */}
        {/* <div className="testimonial__content swiper-slide">
                  <p className="testimonial__description">
                    “Working with {details?.profile?.name} is to give a good
                    impression, I carry out my project at a good cost, with
                    excellent quality and attention. Great service and
                    recommended.”
                  </p>

                  <div>
                    <h3 className="testimonial__name">Anna Chel</h3>
                    <span className="testimonial__subtitle">Client</span>
                  </div>
                </div> */}
        {/* </div> */}

        {/* <!-- Swiper arrows --> */}
        {/* <div className="swiper-button-next">
          <i className="ri-arrow-right-s-line"></i>
        </div>
        <div className="swiper-button-prev">
          <i className="ri-arrow-left-s-line"></i>
        </div> */}
        {/* </div> */}
        {/* </div> */}

        {/* <img
            src="assets/img/shape-waves.svg"
            alt="testimonial image"
            className="testimonial__img"
          /> */}
        {/* </section> */}

        {/* <!--==================== CONTACT ====================--> */}
        <section className="contact section" id="contact">
          <h2 className="section__title">Contact Me</h2>
          <span className="section__subtitle">Get in touch</span>

          <div className="contact__container container grid section__border">
            {/* <!--==================== CONTACT 1 ====================--> */}
            <div className="contact__content">
              <h3 className="contact__title">
                <i className="ri-chat-3-line"></i> Talk to me
              </h3>

              <div className="contact__info">
                <div className="contact__data">
                  <span className="contact__data-title">Email</span>
                  <span className="contact__data-info">
                    {details?.profile?.email}
                  </span>
                </div>

                <div className="contact__data">
                  <span className="contact__data-title">Whatsapp</span>
                  <span className="contact__data-info">
                    {details?.profile?.phone}
                  </span>

                  {/* <!-- Insert a real number plus country code --> */}
                  <a
                    href={`https://api.whatsapp.com/send?phone=${details?.profile?.phone}&text=Hello, more information!`}
                    className="contact__button"
                    target="_blank"
                  >
                    Write me <i className="ri-arrow-right-line"></i>
                  </a>
                </div>

                {/* <div className="contact__data">
                  <span className="contact__data-title">Messenger</span>
                  <span className="contact__data-info">@alan.fb123</span>

                  
                  <a
                    href="https://m.me/bedimcode"
                    className="contact__button"
                    target="_blank"
                  >
                    Write me <i className="ri-arrow-right-line"></i>
                  </a>
                </div> */}
              </div>
            </div>

            {/* <!--==================== CONTACT 2 ====================--> */}
            <div className="contact__content">
              <h3 className="contact__title">
                <i className="ri-send-plane-line"></i> Write me your project
              </h3>

              <form action="" className="contact__form" id="contact-form">
                <div className="contact__form-div">
                  <label className="contact__form-tag">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Enter your name"
                    className="contact__form-input"
                    id="contact-name"
                  />
                </div>

                <div className="contact__form-div">
                  <label className="contact__form-tag">Mail</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Enter your email"
                    className="contact__form-input"
                    id="contact-email"
                  />
                </div>

                <div className="contact__form-div contact__form-area">
                  <label className="contact__form-tag">Project</label>
                  <textarea
                    name="user_project"
                    placeholder="Enter your project description"
                    id="contact-project"
                    className="contact__form-input"
                  ></textarea>
                </div>

                <p className="contact__message" id="contact-message"></p>

                <button type="submit" className="contact__button">
                  Submit <i className="ri-arrow-right-up-line"></i>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      {/* <!--==================== FOOTER ====================--> */}
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__title">{details?.profile?.name}</div>
          <p>{details?.profile?.title}</p>

          <ul className="footer__list">
            <li>
              <a href="#home" className="footer__link">
                Home
              </a>
            </li>

            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="footer__link">
                Projects
              </a>
            </li>
          </ul>

          <ul className="footer__social">
            <a
              href={`https://www.linkedin.com/in/${details?.profile?.linkedIn}`}
              target="_blank"
              className="footer__social-link"
            >
              <i className="ri-linkedin-box-line"></i>
            </a>

            <a
              href={`https://github.com/${details?.profile?.github}`}
              target="_blank"
              className="footer__social-link"
            >
              <i className="ri-github-line"></i>
            </a>
          </ul>

          <span className="footer__copy">
            &#169; Copyright Port4Leo. All rights reserved
          </span>
        </div>
      </footer>

      {/* <!--========== SCROLL UP ==========-->
      <a href="#" class="scrollup" id="scroll-up">
        <i class="ri-arrow-up-line"></i>
      </a>

      <!--=============== SCROLLREVEAL ===============-->
      <script src="assets/js/scrollreveal.min.js"></script>

      <!--=============== SWIPER JS ===============-->
      <script src="assets/js/swiper-bundle.min.js"></script>

      <!--=============== EMAIL JS ===============-->
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      ></script>

      <!--=============== MAIN JS ===============-->
      <script src="assets/js/main.js"></script> */}
    </>
  );
}

export default Template;
