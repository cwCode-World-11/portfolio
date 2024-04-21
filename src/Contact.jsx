import React, { useRef } from "react";
import "./css/Contact.css";
import * as IE from "./importAndExports";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const data = IE.useDataContext();
  const styleData = data.styleData;

  const form = useRef();

  const dummyFn = () => {};

  function handleMail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_emailjs_service_key,
        process.env.REACT_APP_emailjs_template_key,
        form.current,
        {
          publicKey: process.env.REACT_APP_emailjs_public_key,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("ERROR : " + error);
        }
      );

    form.current.reset();
  }

  return (
    <section id="contact">
      <div className="contactSec">
        <h1
          style={{
            margin: "1em",
            color: styleData.patternColors[1],
          }}>
          Contact Me
        </h1>
        <div className="rl">
          <div
            className="contactForm"
            style={{
              backgroundColor: styleData.patternColors[1],
            }}>
            <form className="contactUI" ref={form} onSubmit={handleMail}>
              <input
                type="text"
                placeholder="First name"
                name="from_name"
                required
              />
              {/* <input
                  type="text"
                  placeholder="Last name(Optional)"
                  name="last_name"
                /> */}
              <input
                type="email"
                placeholder="Mail ID"
                name="from_mail"
                required
              />
              <input
                type="text"
                placeholder="Message"
                name="message"
                required
              />
              <input
                type="text"
                placeholder="Message Me"
                name="to_mail"
                style={{ display: "none" }}
                onChange={dummyFn}
                value={data.contactSec.formStyleMsgMe}
              />

              <input
                type="submit"
                style={{ backgroundColor: styleData.patternColors[3] }}
                id="sendBtn"
                value="Send Message"
              />
            </form>
          </div>
          <div
            className="personalDetails"
            style={{
              backgroundColor: styleData.patternColors[3],
            }}>
            {/* Personal details and weblink */}
            <div className="seperateDetails">
              <div className="details">
                {data.contactSec.personalContact.map(({ name, detail }, i) => {
                  return (
                    <React.Fragment key={i}>
                      <p>
                        <b>{name}</b>
                      </p>
                      <p>{detail}</p>
                      <br />
                    </React.Fragment>
                  );
                })}
              </div>
              <div className="dividerLineDetails"></div>
              <div className="webLinks">
                {data.contactSec.webLink.map(
                  ({ domainName, domainLink, domainIcon }, index) => {
                    return (
                      <Link
                        key={index}
                        to={domainLink}
                        target="_blank"
                        className="webLinkDomain"
                        style={{
                          color: styleData.patternColors[0],
                        }}>
                        <div className="domainIcon">
                          {domainIcon instanceof Object ? (
                            <div
                              className="iconDomain"
                              style={{
                                height: "100%",
                                width: "100%",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                scale: "1.2",
                              }}>
                              {domainIcon}
                            </div>
                          ) : (
                            <img src={domainIcon} alt={domainName} />
                          )}
                        </div>
                        <p>|</p>
                        <p>{domainName}</p>
                        <br />
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
