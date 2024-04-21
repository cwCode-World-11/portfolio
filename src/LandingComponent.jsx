import React, { useEffect, useState } from "react";
import * as IE from "./importAndExports";
import "./css/LandingComponent.css";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css";

const LandingComponent = () => {
  const data = IE.useDataContext();
  const [typingStatus, setTypingStatus] = useState("Initializing");
  const styleData = data.styleData;
  useEffect(() => {
    Aos.init({ duration: 2500 });
  });

  return (
    <div className={"mainContainer " + typingStatus} id="home">
      <div
        className="land landLeft"
        style={{
          backgroundColor: styleData.patternColors[4],
          color: styleData.patternColors[0],
        }}>
        <div style={{ width: "100%", paddingLeft: "5em" }}>
          <h3
            data-aos="fade-right"
            style={{
              color: styleData.patternColors[1],
            }}>
            {data.landingTitle}
          </h3>
          <div
            className="animateTxtDiv"
            style={{
              fontSize: styleData.TEXT_SIZE.large,
              color: styleData.patternColors[2],
            }}>
            <TypeAnimation
              sequence={[
                1500,
                () => {
                  setTypingStatus("Typing...");
                },
                data.landingDestination,
                () => {
                  setTypingStatus("Done Typing");
                },
                10000,
                () => {
                  setTypingStatus("Deleting...");
                },
                "",
                () => {
                  setTypingStatus("Done Deleting");
                },
              ]}
              speed={200}
              repeat={Infinity}
            />
          </div>
          <p
            data-aos="fade-up"
            style={{
              color: styleData.patternColors[1],
              fontSize: styleData.TEXT_SIZE.mediumSmall,
            }}>
            {data.landingQuotes.split(" ").map((e, i) => (
              <span key={i}>{e + " "}</span>
            ))}
          </p>
        </div>
      </div>
      <div className="land landRight">
        <div className="shape1"></div>
        <div className="shape2"></div>
        <div className="shape3"></div>
        <div
          className="profilPicDiv"
          style={{
            backgroundColor: styleData.patternColors[1],
            border: "5px solid " + styleData.patternColors[3],
          }}>
          <img src={data.landingProfilePic} alt="myProfilePic" />
        </div>
      </div>
    </div>
  );
};

export default LandingComponent;
