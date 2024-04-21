import React, { useEffect } from "react";
import * as IE from "./importAndExports";
import "./css/AboutSection.css";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  const data = IE.useDataContext();
  const styleData = data.styleData;
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <section
      id="objective"
      style={{
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <div
        className="wrapper"
        style={{ backgroundColor: styleData.patternColors[3] }}>
        <h1
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
          style={{ color: styleData.patternColors[1] }}>
          Objective
        </h1>
        <div className="aboutContainer">
          {/* <div className="imgSec" data-aos="fade-right" data-aos-duration="1000">
          <img src={IE.brainImg} alt="Brain (Idea)" />
        </div> */}
          <div className="txtSec" data-aos="fade-up" data-aos-duration="1000">
            <div className="aboutTxt">
              <p style={{ fontSize: styleData.TEXT_SIZE.small }}>
                {data.aboutSec}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
