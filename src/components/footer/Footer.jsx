import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import "./Footer.scss";
export default function Footer() {
  return (
    <div className="Footer">
      <p className=" fw-lighter">© 2023 Eslam raafat. All rights reserved. Cookie Policy.</p>
      <p className=" fw-lighter">
        Designed by Jason Ujma-Alvis and built by me, data provided by <a className=" text-decoration-underline" target="_blank" href="https://developer.themoviedb.org/reference/intro/getting-started">TMDb</a>
      </p>
      <div className=" d-flex">
        <a href="https://www.facebook.com/eslam.raafat.77" target="_blank" className="icons">
          <FaFacebookSquare  />
        </a>
        <a className="icons" href="https://github.com/Eslamraafat1" target="_blank">
          <FaGithub  />
        </a>
        <a className="icons" href="https://www.linkedin.com/in/eslam-raafat-b465561b8/" target="_blank">
          <FaLinkedin  />
        </a>
        <a className="icons" href="mailto:eslamraafat736@gmail.com">
          {" "}
          <AiOutlineMail  />
        </a>
      </div>
    </div>
  );
}
