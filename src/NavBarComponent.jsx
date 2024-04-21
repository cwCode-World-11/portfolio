import React from "react";
import * as IE from "./importAndExports";
import { Link } from "react-router-dom";
import "./css/navBarComponent.css";

const NavBarComponent = () => {
  const data = IE.useDataContext();

  return (
    <div>
      <div className="navContainer">
        <div
          className="logoName"
          style={{ fontSize: data.styleData.TEXT_SIZE.large }}>
          <Link to="/" style={{ color: data.styleData.patternColors[1] }}>
            {data.logoName}
          </Link>
        </div>
        <div
          className="navSubCon"
          style={{ backgroundColor: data.styleData.patternColors[4] }}>
          {/* <Link
            className="navLinks"
            style={{
              textDecoration: "none",
              color: data.styleData.patternColors[0],
              fontSize: data.styleData.TEXT_SIZE.small,
            }}
            to="#home">
            Home
          </Link>

          <span
            style={{
              backgroundColor: data.styleData.patternColors[0],
            }}
            className="navDividerLine"></span>
          <Link
            className="navLinks"
            style={{
              textDecoration: "none",
              color: data.styleData.patternColors[0],
              fontSize: data.styleData.TEXT_SIZE.small,
            }}
            to="#education">
            Education
          </Link>
          <span
            style={{
              backgroundColor: data.styleData.patternColors[0],
            }}
            className="navDividerLine"></span>
          <Link
            className="navLinks"
            style={{
              textDecoration: "none",
              color: data.styleData.patternColors[0],
              fontSize: data.styleData.TEXT_SIZE.small,
            }}
            to="#project">
            Project
          </Link>
          <span
            style={{
              backgroundColor: data.styleData.patternColors[0],
            }}
            className="navDividerLine"></span>
          <Link
            className="navLinks"
            style={{
              textDecoration: "none",
              color: data.styleData.patternColors[0],
              fontSize: data.styleData.TEXT_SIZE.small,
            }}
            to={data.resumeLink}>
            Resume
          </Link>
          <span
            style={{
              backgroundColor: data.styleData.patternColors[0],
            }}
            className="navDividerLine"></span> */}

          {/* Dynamic Link */}
          {data.navLinks.map(({ txt, link }, i) => {
            return <NavLinksComponent key={i} linkId={link} linkTxt={txt} />;
          })}

          <Link
            className="navLinks contactMe"
            style={{
              textDecoration: "none",
              color: data.styleData.patternColors[4],
              fontSize: data.styleData.TEXT_SIZE.small,
              backgroundColor: data.styleData.patternColors[1],
              padding: ".7em",
            }}
            to="#contact">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

function NavLinksComponent({ linkId, linkTxt }) {
  const data = IE.useDataContext();
  return (
    <>
      <Link
        className="navLinks"
        style={{
          textDecoration: "none",
          color: data.styleData.patternColors[0],
          fontSize: data.styleData.TEXT_SIZE.small,
        }}
        to={linkId}
        target={linkTxt === "Resume" ? "_blank" : ""}>
        {linkTxt}
      </Link>

      {/* This is seperator line and it's optional */}
      <span
        style={{
          backgroundColor: data.styleData.patternColors[0],
        }}
        className="navDividerLine"></span>
    </>
  );
}

export default NavBarComponent;
