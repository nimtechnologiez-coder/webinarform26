import React from "react";
import "../Style/HeroSection.css";
import heroImg from "../images/hero-man.png";

const HeroSection = ({ scrollToUpcoming }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            🎓 Nim Academy Webinar <br /> Series
          </h1>

          <p>
            Join our live expert-led sessions and gain practical knowledge
            across technology, career growth, and industry skills.
          </p>

          <div className="hero-buttons">
            <a
              href="https://nimacademy.in/Webinar-registration"
              className="btn register"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>

            {/* ✅ THIS WILL NOW WORK */}
            <button
              className="btn upcoming"
              onClick={scrollToUpcoming}
            >
              Upcoming webinar
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Webinar Speaker" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
