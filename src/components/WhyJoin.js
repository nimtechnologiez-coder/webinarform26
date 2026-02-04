import React from "react";
import "../Style/WhyJoin.css";
import { FaChartLine, FaBriefcase, FaVideo, FaUserTie, FaTools, FaSuitcase } from "react-icons/fa";

const WhyJoin = () => {
  return (
    <section className="why-join">

      {/* Top Stats */}
      <div className="stats-bar">
        <div className="stat">
          <FaChartLine />
          <div>
            <span className="green">126%</span>
            <p>170% Average Salary Hike</p>
          </div>
        </div>

        <div className="stat">
          <FaBriefcase />
          <div>
            <span className="orange">100+</span>
            <p>Job Placements</p>
          </div>
        </div>

        <div className="stat">
          <FaVideo />
          <div>
            <span className="red">Live</span>
            <p>Interactive Sessions</p>
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="section-title">
        Why Join this <span>Program ?</span>
      </h2>

      {/* Cards */}
      <div className="cards">
        <div className="card">
          <div className="icon blue">
            <FaUserTie />
          </div>
          <h3>Expert Guidance</h3>
          <p>
            Learn directly from industry professionals who share practical
            knowledge and real-world experience.
          </p>
        </div>

        <div className="card">
          <div className="icon blue">
            <FaTools />
          </div>
          <h3>Industry-Relevant Skills</h3>
          <p>
            Gain insights into tools, technologies, and skills currently in
            demand across industries.
          </p>
        </div>

        <div className="card">
          <div className="icon blue">
            <FaSuitcase />
          </div>
          <h3>Career Opportunities</h3>
          <p>
            Understand career paths, job roles, and opportunities available
            in the domain.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
