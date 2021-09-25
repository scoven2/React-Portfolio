import React from 'react';
import Me from '../img/profilepic.jpg';

export default function About() {
  return (
    <div className="viewThree" id="about">
      <div className="row">
        <div className="col-md about-left">
          <img src={Me} className="about-photo img-fluid" alt="Me"></img>
        </div>
        <div className="col-md">
          <h3 className="viewText" id="aboutTitle">ABOUT</h3>
          <div className="row align-self-center bioText">
            <p className="Bio">My name is Scott Siegel and I am a professional web developer. With years of online media experience, and an in-depth knowledge of the ever changing digital landscape, I am able to create dynamic web applications to order. With my team of sibling programmers, Steve and Sarah, we will take over the world.</p>
            <p className="Bio">
              <span className="skillHeader">My Skills</span>
                <ul className=" skillList text-center">
                  <li className="skill">State</li>
                  <li className="skill">MERN</li>
                  <li className="skill">React</li>
                  <li className="skill">PWA</li>
                  <li className="skill">MySQL</li>
                  <li className="skill">NoSQL</li>
                  <li className="skill">MVC</li>
                  <li className="skill">ORM</li>
                  <li className="skill">Express</li>
                  <li className="skill">Node</li>
                  <li className="skill">APIs</li>
                  <li className="skill">JavaScript</li>
                  <li className="skill">HTML and CSS</li>
                </ul>
            </p>
            <p className="Bio">Ciao</p>
          </div>
        </div>
      </div>
    </div>
  );
}
