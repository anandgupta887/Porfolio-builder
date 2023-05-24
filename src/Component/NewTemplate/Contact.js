import React, { useState } from "react";

const Contact = ({ data }) => {
  const [url, setUrl] = useState(
    "mailto:test@example.com?subject=subject&body=body"
  );
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log(data);

  const handleClick = (e) => {
    e.preventDefault();
    window.open(
      `mailto:anandgupta887@yahoo.com?subject=${subject}&body=${name}: ${message}`
    );
  };

  return (
    <section id="contact" className="bg-[#191919] text-white p-5 mt-12">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1 className="text-3xl text-white font-bold mb-5">
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{data?.message}</p>
        </div>
      </div>

      <div className="flex justify-evenly ">
        <div className="eight columns">
          <form id="contactForm" name="contactForm">
            <fieldset>
              <div className="flex my-5 items-center">
                <label htmlFor="contactName" className="w-32">
                  Name <span className="required">*</span>
                </label>
                <input
                  value={name}
                  type="text"
                  className="bg-[#373233] h-10"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex my-5 items-center">
                <label htmlFor="contactEmail" className="w-32">
                  Email <span className="required">*</span>
                </label>
                <input
                  value={email}
                  type="text"
                  className="bg-[#373233] h-10"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex my-5 items-center">
                <label htmlFor="contactSubject" className="w-32">
                  Subject
                </label>
                <input
                  className="bg-[#373233] h-10"
                  value={subject}
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="flex my-5">
                <label htmlFor="contactMessage" className="text-white w-32">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  className="bg-[#373233]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={handleClick}
                  className="ml-32 bg-[#444] text-white hover:bg-[white] hover:text-[#444] px-10 py-3 rounded text-md font-bold"
                >
                  Submit
                </button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          {/* <div id="message-warning"> Error boy</div> */}
          {/* <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div> */}
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4 className="text-xl font-bold my-5">Address and Phone</h4>
            <p className="address text-[#636363]">
              <span>{data?.name}</span>
              <br />
              <span>{data?.address.street}</span>
              <br />
              <span>
                {data?.address.city}, {data?.address.state} {data?.address.zip}
              </span>
              <br />
              <span>{data?.phone}</span>
            </p>
          </div>

          <div className="widget widget_tweets"></div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
