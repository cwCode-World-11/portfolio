import { useState } from "react";
import "./css/SkillComponent.css";
import * as IE from "./importAndExports";

const SkillComponent = () => {
  const [skillSelect, setSkillSelect] = useState("All");

  let filteredSkill = [];
  const data = IE.useDataContext();
  const styleData = data.styleData;

  filteredSkill = data.skillDetails.filter(
    (e) => e.skillCategory === skillSelect
  );
  return (
    <>
      <section className="skill">
        <div
          className="skillSec"
          style={{
            backgroundColor: styleData.patternColors[3],
            // height: "50vh",
            // marginTop: "30vh",
          }}>
          <div
            className="categoryLeft"
            style={{ backgroundColor: styleData.patternColors[3] }}>
            <SkillLeftComponent
              skillCategory="All"
              setSkillSelect={setSkillSelect}
              skillSelect={skillSelect}
            />
            {data.skillDetails.map((e, i) => (
              <SkillLeftComponent
                key={i}
                skillCategory={e.skillCategory}
                setSkillSelect={setSkillSelect}
                skillSelect={skillSelect}
              />
            ))}
          </div>
          <div
            className="skillsRight"
            style={{ backgroundColor: styleData.patternColors[3] }}>
            {skillSelect !== "All"
              ? filteredSkill.map((e) =>
                  e.skills.map((a) => (
                    <SkillCardComponent
                      key={a.skillName}
                      offLink={a.offLink}
                      skillImg={a.skillIcon}
                      skillName={a.skillName}
                    />
                  ))
                )
              : data.skillDetails.map((e) =>
                  e.skills.map((a) => (
                    <SkillCardComponent
                      key={a.skillName}
                      offLink={a.offLink}
                      skillImg={a.skillIcon}
                      skillName={a.skillName}
                    />
                  ))
                )}
          </div>
        </div>
      </section>
    </>
  );
};

function SkillLeftComponent({ skillSelect, skillCategory, setSkillSelect }) {
  const styleData = IE.useDataContext().styleData;
  const sameSame = skillSelect === skillCategory;
  return (
    <div
      className="skillLeft"
      id={sameSame ? "skillSelectedColor" : ""}
      onClick={() => setSkillSelect(skillCategory)}
      style={{
        backgroundColor: sameSame
          ? styleData.patternColors[3]
          : styleData.patternColors[0],
        // backgroundColor: styleData.patternColors[3],
        color: sameSame
          ? styleData.patternColors[0]
          : styleData.patternColors[3],
      }}>
      <span>{skillCategory}</span>
    </div>
  );
}

function SkillCardComponent({ skillName, skillImg, offLink }) {
  return (
    <div
      className="skillCard"
      onClick={() => window.open(offLink, "_blank", "noopener,noreferrer")}
      style={{
        backgroundColor: IE.useDataContext().styleData.patternColors[4],
      }}>
      <div className="cardImgDiv">
        {skillImg instanceof Object ? (
          <div
            className="iconsSkill"
            style={{
              // backgroundColor: "red",
              height: "100%",
              width: "100%",
              scale: "3",
              padding: "1em",
            }}>
            {skillImg}
          </div>
        ) : (
          <img src={skillImg} alt={skillName} />
        )}
      </div>
      <span>
        {skillName.split(" ")[0].length > 8
          ? skillName.split(" ")[0].substring(0, 10)
          : skillName.split(" ")[0].substring(0, 8)}
      </span>
    </div>
  );
}

export default SkillComponent;
