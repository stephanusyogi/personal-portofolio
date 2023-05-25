import React from "react";
import "./certificate.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Certificate = () => {
  return (
    <section id="certificate">
      <h5>What I Have</h5>
      <h2>My Licenses & Certifications</h2>
      <div className="container certificate__container">
        <div className="certificate__frontend">
          <div className="certificate__content">
            <article className="certificate__details">
              <BsPatchCheckFill className="certificate__details-icon" />
              <div>
                <h4>Junior Web Developer</h4>
                <small className="text-light">
                  Badan Nasional Sertifikasi Profesi (BNSP)
                </small>
                <br />
                <small className="text-light">(March 2022 - Lifetime)</small>
              </div>
            </article>
            <article className="certificate__details">
              <BsPatchCheckFill className="certificate__details-icon" />
              <div>
                <h4>HackerRank Problem Solving Basic</h4>
                <small className="text-light">HackerRank</small>
                <br />
                <small className="text-light">
                  (August 2021 - August 2021)
                </small>
              </div>
            </article>
            <article className="certificate__details">
              <BsPatchCheckFill className="certificate__details-icon" />
              <div>
                <h4>PCAP: Programming Essentials in Pyhton</h4>
                <small className="text-light">Cisco Networking Academy</small>
                <br />
                <small className="text-light">(July 2021 - July 2021)</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
