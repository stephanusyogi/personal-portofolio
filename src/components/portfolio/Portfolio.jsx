import React from "react";
import "./portfolio.css";
import reta from "../../assets/portfolio-reta.png";
import widyabhakti from "../../assets/portfolio-widyabhakti.png";
import m1 from "../../assets/portfolio-m1.png";
import alhadi from "../../assets/portfolio-alhadi.png";
import chatapp from "../../assets/portfolio-chatapp.png";
import delrecipe from "../../assets/portfolio-delrecipe.png";
import emart from "../../assets/portfolio-emart.png";
import fluxo from "../../assets/portfolio-fluxo.png";
import restourant from "../../assets/portfolio-restourant.png";

const Portfolio = () => {
  const href = "#";
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={reta} alt="portfolio-stephanus-yogi" />
          </div>
          <h3>Reta Shop</h3>
          <p>
            E-Commerce website based on Codeigniter PHP Framework, integrated
            with REST-API.
          </p>
          <div className="portfolio__items-cta">
            <a href="https://github.com/wiraisy/ClientReta" className="btn">
              Github
            </a>
            <a
              href="https://shop.reta.co.id/"
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Live
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={widyabhakti} alt="portfolio-stephanus-yogi" />
          </div>
          <h3>WidyaBhakti Pastoral Center</h3>
          <p>
            Company profil website for church community based on CodeigniterPHP
            Framework, integrated with REST-API.
          </p>
          <div className="portfolio__items-cta">
            <a
              href="https://github.com/stephanusyogi/widyabhakti"
              className="btn"
            >
              Github
            </a>
            <a
              href={href}
              rel="noreferrer"
              target="_blank"
              className="disable-btn btn btn-primary"
              aria-disabled="true"
            >
              Live
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={m1} alt="portfolio-stephanus-yogi" />
          </div>
          <h3>Millenial Utas</h3>
          <p>
            Company profil website for young entrepreneur community in Malang
            made with elementor wordpress template.
          </p>
          <div className="portfolio__items-cta">
            <a href={href} className="disable-btn btn" aria-disabled="true">
              Github
            </a>
            <a
              href={href}
              rel="noreferrer"
              target="_blank"
              aria-disabled="true"
              className="disable-btn btn btn-primary"
            >
              Live
            </a>
          </div>
        </article>
      </div>
      <h2>Learning & Other Projects</h2>
      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={alhadi} alt="portfolio-stephanus-yogi" />
          </div>
          <h3>MA PLUS Al-Hadi</h3>
          <p>Slicing UI from Figma Design into HTML, CSS(LESS), JS.</p>
          <div className="portfolio__items-cta">
            <a href={href} className="disable-btn btn">
              Github
            </a>
            <a
              href="https://alhadi.netlify.app/"
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Live
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={chatapp} alt="portfolio-stephanus-yogi" />
          </div>
          <h3>Chat App</h3>
          <p>
            An Chating Web-Application made with ReactJS for Front-End and
            GraphQL using Hasura for the Back-End.
          </p>
          <div className="portfolio__items-cta">
            <a href="https://github.com/stephanusyogi/chat-app" className="btn">
              Github
            </a>
            <a
              href="https://chatapp-stephanusyogi.netlify.app/"
              rel="noreferrer"
              target="_blank"
              className="disable-btn btn btn-primary"
              aria-disabled="true"
            >
              Live
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={delrecipe} alt="portfolio-stephanus-yogi" />
          </div>
          <h3>DelRecipe</h3>
          <p>Recipe Collection with REST-API build based on ReactJS.</p>
          <div className="portfolio__items-cta">
            <a
              href="https://github.com/stephanusyogi/delrecipe"
              className="disable-btn btn"
              aria-disabled="true"
            >
              Github
            </a>
            <a
              href="https://delrecipe-stephanusyogi.netlify.app/"
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Live
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={emart} alt="portfolio-stephanus-yogi" />
          </div>
          <h3>E-Mart</h3>
          <p>
            E-Commerce Website build with ReactJS and using React-Redux for
            state managament.
          </p>
          <div className="portfolio__items-cta">
            <a href="https://github.com/stephanusyogi/emart" className="btn">
              Github
            </a>
            <a
              href="https://emart-stephanusyogi.netlify.app/"
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Live
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={fluxo} alt="portfolio-stephanus-yogi" />
          </div>
          <h3>Fluxo</h3>
          <p>Slicing UI from Figma Design into HTML, CSS(LESS), JS.</p>
          <div className="portfolio__items-cta">
            <a href={href} className="disable-btn btn">
              Github
            </a>
            <a
              href={href}
              rel="noreferrer"
              target="_blank"
              className="disable-btn btn btn-primary"
              aria-disabled="true"
            >
              Live
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            <img src={restourant} alt="portfolio-stephanus-yogi" />
          </div>
          <h3>Restourant Landing</h3>
          <p>Slicing UI from Figma Design into HTML, CSS(LESS), JS.</p>
          <div className="portfolio__items-cta">
            <a href={href} className="disable-btn btn" aria-disabled="true">
              Github
            </a>
            <a
              href={href}
              rel="noreferrer"
              target="_blank"
              className="disable-btn btn btn-primary"
            >
              Live
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
