import React, { useEffect, useRef, useState } from "react";
import * as IE from "./hooks/dataContext.js";
import { Link } from "react-router-dom";
import "./css/ProjectModalComponent.css";

export function ProjectModalComponent() {
  const idRef = useRef();
  const data = IE.useDataContext();
  // const [projectObj, setProjectObj] = useState(null);
  const [searchedTxt, setSearchedTxt] = useState("");

  useEffect(() => {
    idRef.current.scrollIntoView({
      inline: "nearest",
    });
  }, []);

  console.log("searchedTxt:", searchedTxt);
  function searchProject() {
    if (searchedTxt === "") {
      return data.projectSec;
    } else {
      return data.projectSec.filter((e) =>
        e.projectTitle
          .toString()
          .toLowerCase()
          .includes(searchedTxt.toLowerCase())
      );
    }
  }

  function openImg(url) {
    return window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="modalSec" ref={idRef}>
      <article
        className="projectModal"
        style={{ background: data.styleData.patternColors[3] }}>
        <div className="searchAndCloseDiv" id="viewAllProject">
          <p style={{ color: data.styleData.patternColors[1] }}>
            View all project
          </p>
          <input
            type="text"
            placeholder="Search project here..."
            value={searchedTxt}
            onChange={(e) => setSearchedTxt(e.target.value)}
          />
          <div
            className="projectModalCloseDiv"
            style={{ color: data.styleData.patternColors[1] }}>
            <Link to="/">Back</Link>
          </div>
        </div>
        <div className="projectModalMain">
          {searchProject().map(
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
                  <div
                    className="modalMain"
                    onClick={() => openImg(myProjectLink)}
                    key={index}>
                    {projectThumbnail && (
                      <div className="modalImgDiv">
                        <img src={projectThumbnail} alt={projectTitle} />
                      </div>
                    )}
                    <div className="modalTxtSec">
                      {projectTitle && (
                        <p style={{}}>
                          <b>Name : </b> {projectTitle}
                        </p>
                      )}

                      {releaseDate && (
                        <p>
                          <b>Release Date : </b>
                          {releaseDate}
                        </p>
                      )}
                      {projectDesc && (
                        <p>
                          <b>Description : </b>
                          {projectDesc}
                        </p>
                      )}
                    </div>
                  </div>
                )
              );
            }
          )}
        </div>
      </article>
    </section>
  );
}
