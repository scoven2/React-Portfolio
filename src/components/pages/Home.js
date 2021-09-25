import React from 'react';
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div clasName="row" id="/">
      
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
    // <div>
    //   <h1>Home Page</h1>
    //   <p>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
    //     velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
    //     ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
    //     non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
    //     ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
    //     rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
    //     tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
    //     porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
    //     vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
    //     fames ac ante ipsum primis in faucibus.
    //   </p>
    // </div>
  );
}
