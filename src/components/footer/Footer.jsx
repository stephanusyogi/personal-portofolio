import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagramSquare } from "react-icons/fa";
import Certificate from "./../certificate/certificate";

const Footer = () => {
  const href = "#";
  return (
    <footer>
      <a href={href} className="footer__logo">
        STEPHANUS PRADIPTA YOGI SETIAWAN
      </a>
      <ul className="permalinks">
        <li>
          <a href={href}>Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#job">Jobs</a>
        </li>
        <li>
          <a href="#certificate">Licenses & Certifications</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/stephanus-yogi/"
          rel="noreferrer"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/stephanusyogi"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/stephanusyogi/"
          rel="noreferrer"
          target="_blank"
        >
          <FaInstagramSquare />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; StephanusYogi. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
