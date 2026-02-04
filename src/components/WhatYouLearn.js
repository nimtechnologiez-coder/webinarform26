import React from "react";
import "../Style/WhatYouLearn.css";

const WhatYouLearn = () => {
  return (
    <section className="learn-section">
      <h2 className="learn-title">
        WHAT YOU’LL LEARN IN OUR <span>WEBINARS</span>
      </h2>

      <div className="learn-grid">
        <div className="learn-card">
          <h3>How IT Teams Actually Work Inside Companies</h3>
          <p>
            Understand how different roles collaborate across projects, tools,
            and workflows.
          </p>
        </div>

        <div className="learn-card">
          <h3>Tools & Platforms Used by IT Professionals Daily</h3>
          <p>
            See the common environments, software, and systems used across IT
            domains.
          </p>
        </div>

        <div className="learn-card">
          <h3>How Beginners Can Enter IT Without Confusion</h3>
          <p>
            A simple starting path even if you don’t have coding or technical
            background.
          </p>
        </div>

        <div className="learn-card">
          <h3>Live Demonstration of a Real IT Project Workflow</h3>
          <p>
            From setup to execution — how real work is done.
          </p>
        </div>

        <div className="learn-card">
          <h3>2026 IT Job Market Roadmap</h3>
          <p>
            Which skills are in demand and how hiring works across roles.
          </p>
        </div>

        <div className="learn-card">
          <h3>How Students Start Earning Through IT Skills</h3>
          <p>
            Freelancing, internships, entry roles, and practical opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
