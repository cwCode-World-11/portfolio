import React, { useEffect } from "react";
import * as IE from "./importAndExports";
import "./css/HomeComponent.css";
// All components are goes here...

const HomeComponent = () => {
  const data = IE.useDataContext();

  useEffect(() => {
    const favicon = document.querySelector("#favIcon");
    favicon.href = data.favicon;
    document.title = data.headerTitle;
  }, [data]);

  return (
    <div className="mainAll">
      <IE.NavBarComponent />
      <IE.LandingComponent />
      <div className="dividerLine"></div>
      {data.aboutSec && <IE.AboutSection />}
      <div className="dividerLine"></div>
      {data.educationDetails && <IE.EducationSection />}
      <div className="dividerLine"></div>
      {data.skillDetails && <IE.SkillComponent />}
      {/* <div className="dividerLine"></div> */}
      {data.projectSec && <IE.ProjectSection />}
      {/* <div className="dividerLine"></div> */}
      {data.contactSec && <IE.Contact />}
      {/* <div className="dividerLine"></div> */}
    </div>
  );
};

export default HomeComponent;
