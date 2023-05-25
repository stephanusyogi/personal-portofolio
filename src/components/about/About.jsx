import React from "react";
import "./about.css";
import ME from "../../assets/about3.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { MdOutlineHandyman } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Stephanus Yogi" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiences</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Portofolio</small>
            </article>
            <article className="about__card">
              <MdOutlineHandyman className="about__icon" />
              <h5>Skills</h5>
              <small>Hard & Soft Skill Abilities</small>
            </article>
          </div>
          <p>
            My name is Stephanus Yogi. I am twenty-three years old. I have good
            motivation for growing, eager to learn, and can work in a team and
            individually. With my experiences and educational background, I am
            confident that my qualification and skills could make significant
            contributions to the company.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talks
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
