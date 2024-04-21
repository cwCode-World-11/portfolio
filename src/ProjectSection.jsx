import React from "react";
import * as IE from "./hooks/dataContext.js";
import "./css/ProjectSection.css";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  const data = IE.useDataContext();
  const patternData = data.styleData.patternColors;
  return (
    <section id="project">
      <div className="projectSec">
        <div className="projectTitleDiv">
          <h1 style={{ color: patternData[1] }}>Projects</h1>
        </div>
        <div className="projectCardContainer">
          {data.projectSec
            .slice(0, 4)
            .map(({ projectTitle, projectThumbnail, myProjectLink }, i) => {
              return (
                <ProjectCardComponent
                  key={i}
                  projectImgSrc={projectThumbnail}
                  projectTitle={projectTitle}
                  myProjectLink={myProjectLink}
                />
              );
            })}
        </div>
        <div className="viewAllSec">
          <Link
            to="/viewAllProject"
            style={{
              textDecoration: "none",
              color: patternData[0],
            }}>
            <button
              id="viewAllBtn"
              style={{
                backgroundColor: patternData[3],
                color: patternData[0],
              }}>
              View All<strong>&rarr;</strong>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

function ProjectCardComponent({ projectImgSrc, projectTitle, myProjectLink }) {
  const data = IE.useDataContext();
  const patternData = data.styleData.patternColors;
  return (
    <div
      className="mainProjectCardDiv"
      style={{ backgroundColor: patternData[1] }}>
      <div
        className="imgDiv"
        style={{
          width: "100%",
          margin: "auto",
        }}>
        <img
          src={projectImgSrc}
          alt="projects"
          style={{
            minHeight: "100%",
            minWidth: "100%",
            maxWidth: "150%",
          }}
        />
      </div>
      <div className="projectTitle" style={{ color: patternData[4] }}>
        <span>
          {projectTitle}
          <br />
        </span>
        <p>
          <a
            href={myProjectLink}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: patternData[4],
              width: "fit-content",
            }}>
            Click here to view<strong>&rarr;</strong>
          </a>
        </p>
      </div>
    </div>
  );
}

export function ProjectModalComponent() {
  const data = IE.useDataContext();

  return (
    <section className="modalSec">
      <div className="projectModal">
        <div className="searchAndCloseDiv" id="viewAllProject">
          <input type="text" />
          <div className="projectModalCloseDiv">
            <Link to="/">Back</Link>
          </div>
        </div>
        <div className="projectModalMain">
          {data.projectSec.map(
            (
              {
                projectTitle,
                projectThumbnail,
                releaseDate,
                projectDesc,
                myProjectLink,
              },
              index
            ) => {
              return (
                myProjectLink && (
                  <div className="modalMain" key={index}>
                    {projectThumbnail && (
                      <div className="modalImgDiv">
                        <img src={projectThumbnail} alt={projectTitle} />
                      </div>
                    )}
                    <div className="modalTxtSec">
                      {projectTitle && (
                        <span>
                          {projectTitle}
                          <br />
                        </span>
                      )}
                      {releaseDate && (
                        <span>
                          {releaseDate}
                          <br />
                        </span>
                      )}
                      {projectDesc && (
                        <span>
                          {projectDesc}
                          <br />
                        </span>
                      )}
                    </div>
                  </div>
                )
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
