import React from "react";
import "./style.css";
import ResumePDF from "../../components/ResumePDF/Scott_Siegel_Resume_.pdf";

function Resume() {
  return (
    <div className="viewFour" id="resume">
      <div className="row">
        <div className="col-md">
          <a href={ResumePDF} target="_blank" className="resLink" rel="noreferrer">
            <h3 className="viewTitle" id="resumeTitle">Resume</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;