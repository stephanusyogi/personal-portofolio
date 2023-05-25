import React from "react";
import "./job.css";
import { BiCheck } from "react-icons/bi";

const Job = () => {
  return (
    <section id="job">
      <h5>What I Did</h5>
      <h2>Working Experience</h2>
      <div className="container work__container">
        <article className="work">
          <div className="work__head">
            <h3>Central Bank of Indonesia</h3>
            <small>
              <h4>Web Developer - Internship</h4>
              (6 Months)
            </small>
          </div>
          <ul>
            <li className="work__list">
              <BiCheck className="work__list-icon" />
              <p>
                Create a database design and business flowcharts for the
                PPIP-TRACKER (Program Pensiun Iuran Pasti) website.
              </p>
            </li>
            <li className="work__list">
              <BiCheck className="work__list-icon" />
              <p>
                Create a PPIP-TRACKER Backend API Endpoint using the PHP Laravel
                framework.
              </p>
            </li>
            <li className="work__list">
              <BiCheck className="work__list-icon" />
              <p>
                Create a Pension Fund Tracker website based on the PPIP-TRACKER
                concept using the PHP CodeIgniter framework
              </p>
            </li>
          </ul>
        </article>
        <article className="work">
          <div className="work__head">
            <h3>DITRESNARKOBA POLDA JATIM</h3>
            <small>
              <h4>Web Developer - Internship</h4>
              (4 Months)
            </small>
          </div>
          <ul>
            <li className="work__list">
              <BiCheck className="work__list-icon" />
              <p>
                Design a list of requirements, business flowcharts, database
                diagrams for a case-disclosure reporting application system.
              </p>
            </li>
            <li className="work__list">
              <BiCheck className="work__list-icon" />
              <p>
                Create a case-disclosure reporting application system using the
                website-based PHP CodeIgniter framework.
              </p>
            </li>
          </ul>
        </article>
        <article className="work">
          <div className="work__head">
            <h3>CWB IT DEV</h3>
            <small>
              <h4>Front End Developer - Freelance</h4>
              (8 Months)
            </small>
          </div>
          <ul>
            <li className="work__list">
              <BiCheck className="work__list-icon" />
              <p>
                Integrate E-Commerce App project with REST-API based on
                CodeIgniter
              </p>
            </li>
            <li className="work__list">
              <BiCheck className="work__list-icon" />
              <p>Produced Company Profile Website based on CodeIgniter</p>
            </li>
          </ul>
        </article>
        <article className="work">
          <div className="work__head">
            <h3>Gumcode</h3>
            <small>
              <h4>Front End Developer - Contract</h4>
              (3 Months)
            </small>
          </div>
          <ul>
            <li className="work__list">
              <BiCheck className="work__list-icon" />
              <p>
                Produced Interface Website Property based on CodeIgniter and
                Google Maps API
              </p>
            </li>
            <li className="work__list">
              <BiCheck className="work__list-icon" />
              <p>Produced CMS of Website Property based on CodeIgniter</p>
            </li>
          </ul>
        </article>
        <article className="work">
          <div className="work__head">
            <h3>Inagata Technosmith</h3>
            <small>
              <h4>Front End Developer - Internship</h4>
              (4 Months)
            </small>
          </div>
          <ul>
            <li className="work__list">
              <BiCheck className="work__list-icon" />
              <p>
                Sliced PSD and Figma design to HTML and CSS Preprocessor (LESS)
              </p>
            </li>
            <li className="work__list">
              <BiCheck className="work__list-icon" />
              <p>Solved Bug on Website Property and Payment based on React</p>
            </li>
            <li className="work__list">
              <BiCheck className="work__list-icon" />
              <p>
                Produced Inagata Katalog, website platform for intern katalog
                based on React
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Job;
