import React from "react";
import EDMPhoto from "../images/emanuele-del-monte.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <div className="info">
      <img className="info--photo" src={EDMPhoto} alt="emanuele del monte" />
      <h1 className="info--fullname">Emanuele Del Monte</h1>
      <h5 className="info--role">Junior Front End Developer</h5>
      <p className="info--website">
        <a
          className="info--websiteLink"
          href="https://www.emanueledelmonte.it"
          target="_blank"
          rel="noopener noreferrer"
        >
          emanueledelmonte.it
        </a>
      </p>
      <div className="info--buttons">
        <address>
          <a href="mailto:info@emanueledelmonte.it">
            {" "}
            <button className="button button--email">
              <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
              Email
            </button>
          </a>
        </address>
        <a
          href="https://www.linkedin.com/in/emanueledelmonte/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
