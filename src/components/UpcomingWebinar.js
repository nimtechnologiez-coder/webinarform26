import React from "react";
import "../Style/UpcomingWebinar.css";
import speakerImg from "../images/gowda.png";

const UpcomingWebinar = () => {
  return (
    <section className="upcoming-wrapper">
      <h2 className="upcoming-title">Upcoming Webinar</h2>

      <div className="webinar-card">
        <div className="webinar-content">
          <h1>Cyber security 360° Live</h1>

          <p>
            This program covers key cybersecurity domains including Ethical
            Hacking and Penetration Testing, AI Testing, Cloud Security, and
            Security Operations Center (SOC) operations, helping participants
            understand how modern systems are tested, protected, and monitored
            against cyber threats.
          </p>

          <ul className="webinar-points">
            <li>Free Registration</li>
            <li>Guaranteed Certification</li>
          </ul>

          <div className="webinar-buttons">
            <a
              href="https://your-register-link.com"
              className="btn primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>

            <a
              href="/about"
              className="btn secondary"
            >
              Show More
            </a>

          </div>
        </div>

        <div className="webinar-image">
          <img src={speakerImg} alt="Speaker" />
          <div className="speaker-badge">
            Speaker : Vishwanath Gowda
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingWebinar;
