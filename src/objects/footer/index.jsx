import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { FooterObject } from "./styles";

const Footer = () => (
  <FooterObject>
    <a href="#top">
      <FaArrowUp />
    </a>
    <p>
      Copyright © 2021{" "}
      <a
        className="link-footer"
        href="https://www.linkedin.com/in/jose-de-souza/"
        target="_blank"
        rel="noreferrer"
      >
        José de Souza
      </a>
      . All Rights Reserved.
    </p>
  </FooterObject>
);

export default Footer;
