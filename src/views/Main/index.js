import React from "react";
import NavBar from "../../components/NavBar";
import "./style.css";
import { Link } from "react-scroll";

function MainPage() {
  return (
    <div clasName="row" id="/">
      <NavBar />
      <div className="col-md">
        <div className="mobile-image">
          <div className="intro-text alignCenter">
            <h2 className="mobile-title">SCOTT SIEGEL</h2>
            <h2 className="intro">Web Developer</h2>
            <h3>Professional. Digital. Excellence.</h3>
            <Link to="about"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              <button type="button" className="readMore btn btn-info">More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md">
        <div className="right-image"></div>
      </div>
    </div>
  );
}

export default MainPage;