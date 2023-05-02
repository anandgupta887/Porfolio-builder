import React, { Component } from "react";
import profilepic from "./images/Git_Anand.jpeg";
import React from "react";
import profilepic from "./profile-pic.jpg";

function About(props) {
  const { data } = props;

  if (data) {
    var name = data.name;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about" className="bg-[#2B2B2B] p-10 z-50">
      <div className="flex gap-10">
        <div className="">
          <img
            className="profile-pic w-32 rounded-full"
            src={profilepic}
            alt="Tim Baker Profile Pic"
          />
        </div>
        <div className="">
          <h2 className="font-bold text-white text-2xl">About Me</h2>

          <p className="text-[#7A7A7A] pr-32 text-md my-5">{bio}</p>
          <div className="flex items-center">
            <div className="columns contact-details">
              <h2 className="font-bold text-white text-2xl">Contact Details</h2>
              <p className="address">
                <span className="text-[#7A7A7A] text-md">{name}</span>
                <br />
                <span className="text-[#7A7A7A] text-md">
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span className="text-[#7A7A7A] text-md">{phone}</span>
                <br />
                <span className="text-[#7A7A7A] text-md">{email}</span>
              </p>
            </div>
            <div className="flex justify-center items-center w-full">
              <p>
                <a
                  href={resumeDownload}
                  className="bg-[#444] text-white hover:bg-[white] hover:text-[#444] px-10 py-3 rounded text-md font-bold"
                >
                  <i className="ri-skip-down-fill"></i> Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
