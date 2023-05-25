import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href={activeNav}
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href={activeNav}
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href={activeNav}
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <BiBook />
      </a>
      <a
        href={activeNav}
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => setActiveNav("#portfolio")}
      >
        <RiServiceLine />
      </a>
      <a
        href={activeNav}
        className={activeNav === "#job" ? "active" : ""}
        onClick={() => setActiveNav("#job")}
      >
        <FaLaptopCode />
      </a>
      <a
        href={activeNav}
        className={activeNav === "#certificate" ? "active" : ""}
        onClick={() => setActiveNav("#certificate")}
      >
        <BsCardChecklist />
      </a>
      <a
        href={activeNav}
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
