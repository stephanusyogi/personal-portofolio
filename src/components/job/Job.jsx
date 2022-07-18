import React from "react";
import "./job.css";
import { BiCheck } from "react-icons/bi";

const Job = () => {
  return (
    <section>
      <h5>What I Did</h5>
      <h2>Working Experience</h2>
      <div className="container work__container">
        <article className="work">
          <div className="work__head">
            <h3>Inagata Technosmith</h3>
            <small>FE-Internship (4 Months)</small>
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
        <article className="work">
          <div className="work__head">
            <h3>Gumcode</h3>
            <small>FE-Contract (3 Months)</small>
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
            <h3>CWB IT DEV</h3>
            <small>FE-Freelance (8 Months)</small>
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
      </div>
    </section>
  );
};

export default Job;
