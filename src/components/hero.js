import React from "react";
import "../Style/hero.css";
import speaker from "../images/image.png";

const Hero = () => {
  return (
    <section className="hero-sec">
      <div className="hero-sec-wrapper">
        {/* LEFT */}
        <div className="hero-sec-text">
          <h1>Cyber security 360° Live</h1>

          <p>
            This program covers key cybersecurity domains including Ethical
            Hacking and Penetration Testing, AI Testing, Cloud Security, and
            Security Operations Center (SOC) operations, helping participants
            understand how modern systems are tested, protected, and monitored
            against cyber threats.
          </p>

          <div className="hero-sec-tags">
            <span>Free Registration</span>
            <span>Guaranteed Certification</span>
          </div>

          <a
            href="https://nimacademy.in/Webinar-registration"
            className="hero-sec-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
        </div>

        {/* RIGHT */}
        <div className="hero-sec-image">
          <img src={speaker} alt="Speaker" />
          <div className="hero-sec-badge">
            Speaker : Vishwanath Gowda
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
