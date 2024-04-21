import React, { useEffect, useState } from "react";
import "./css/EducationSection.css";
import Aos from "aos";
import "aos/dist/aos.css";
import * as IE from "./importAndExports";

const EducationSection = () => {
  const data = IE.useDataContext();
  const colors = data.styleData.patternColors;
  const edu = data.educationDetails;
  const [ch, setCh] = useState("");

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div id="education">
      <div className={"educationSec " + ch}>
        <h1 style={{ color: colors[1] }}>Education</h1>
        <div className="track">
          <StepperCompenent clsName="stepContainer">
            <IE.FA.FaGraduationCap
              style={{
                width: "2em",
                height: "2em",
                marginTop: ".5em",
                color: data.styleData.patternColors[1],
              }}
            />
          </StepperCompenent>

          {/* BG or Border */}
          <StepperCompenent
            clsName="bgStep"
            shapeStyle={{
              backgroundColor: data.styleData.patternColors[3],
              padding: ".5em",
              transform: "scale(1)",
            }}
          />
        </div>
        <div className="cardDiv ">
          <CardComponent
            cardCls="cardLeft"
            clgName={edu[0].clgName}
            year={edu[0].year}
            course={edu[0].course}
            percentage={edu[0].percentage}
            cardStyle={{
              marginTop: "8vh",
              backgroundColor: colors[1],
              color: colors[3],
            }}
            setCh={setCh}
          />
          <CardComponent
            cardCls="cardRight"
            clgName={edu[1].clgName}
            year={edu[1].year}
            course={edu[1].course}
            percentage={edu[1].percentage}
            cardStyle={{
              marginTop: "-7vh",
              backgroundColor: colors[1],
              color: colors[3],
            }}
            setCh={setCh}
          />
          {edu[2] && (
            <CardComponent
              cardCls="cardLeft"
              clgName={edu[2].clgName}
              year={edu[2].year}
              course={edu[2].course}
              percentage={edu[2].percentage}
              cardStyle={{
                marginTop: "-5vh",
                backgroundColor: colors[1],
                color: colors[3],
              }}
              setCh={setCh}
            />
          )}
          {edu[3] && (
            <CardComponent
              cardCls="cardRight"
              clgName={edu[3].clgName}
              year={edu[3].year}
              course={edu[3].course}
              percentage={edu[3].percentage}
              cardStyle={{
                marginTop: "-5vh",
                backgroundColor: colors[1],
                color: colors[3],
              }}
              setCh={setCh}
            />
          )}
        </div>
      </div>
    </div>
  );
};

function StepperCompenent({ stl, clsName, shapeStyle, children }) {
  return (
    <>
      <div
        className={clsName}
        data-aos={clsName === "stepContainer" ? "maskAnimation" : ""}
        data-aos-duration="5000"
        data-aos-once="true"
        style={stl}>
        <div className="ball" style={shapeStyle}></div>
        <div className="ball" style={shapeStyle}></div>
        <div className="ball" style={shapeStyle}></div>
        <div className="ball" style={shapeStyle}></div>
        <div className="ball" style={shapeStyle}></div>
        <div className="ball" style={shapeStyle}>
          {children}
        </div>
        <div className="line" style={shapeStyle}></div>
      </div>
    </>
  );
}

function CardComponent({
  cardCls,
  clgName,
  course,
  year,
  percentage,
  cardStyle,
  setCh,
}) {
  const [hoverEffect, setHoverEffect] = useState(cardStyle);
  const [exceptCls, setExceptCls] = useState("");

  return (
    <>
      <div
        className={"cardContainer " + cardCls + " " + exceptCls}
        style={hoverEffect}
        onMouseEnter={() => {
          setHoverEffect({
            ...cardStyle,
            scale: "1.2",
            transition: "all .3s ease",
            opacity: "1 !important",
            zIndex: "5",
          });
          setCh("hhh");
          setExceptCls("hovering");
        }}
        onMouseLeave={() => {
          setHoverEffect({
            ...cardStyle,
            scale: "1",
            transition: "all .3s ease",
            opacity: "1 !important",
          });
          setCh("");
          setExceptCls("");
        }}>
        <p>{clgName}</p>
        <p>{course}</p>
        <p>{year}</p>
        <p>{percentage}</p>
      </div>
    </>
  );
}

export default EducationSection;
