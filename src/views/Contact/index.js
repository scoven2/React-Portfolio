import React from "react";
import ContactForm from "../../components/ContactForm";
import SocialLinks from "../../components/SocialLinks";
import "./style.css";

function Contact () {
  return (
    <div className="viewFive" id="contact">
      <div className="row contact-row">
        <div className="form" id="div">
          <h3 className="viewTitle" id="contactTitle">
            Hope to hear from you soon
          </h3>
          <hr></hr>
          <ContactForm />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Contact;