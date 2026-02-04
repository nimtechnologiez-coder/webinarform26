import React from "react";
import "../Style/IncludedForAttendees.css";
import {
  FiClock,
  FiHelpCircle,
  FiTrendingUp,
  FiPackage,
  FiUsers
} from "react-icons/fi";

const IncludedForAttendees = () => {
  return (
    <section className="included-section">

      <h2 className="included-title">
        WHAT’S INCLUDED FOR <span>ATTENDEES</span>
      </h2>

      {/* ICON GRID */}
      <div className="included-grid">
        <div className="included-item">
          <div className="icon-circle"><FiClock /></div>
          <p>Live 2+ hour<br />practical session</p>
        </div>

        <div className="included-item">
          <div className="icon-circle"><FiHelpCircle /></div>
          <p>Live Q&amp;A with<br />mentors</p>
        </div>

        <div className="included-item">
          <div className="icon-circle"><FiTrendingUp /></div>
          <p>Step-by-step<br />setup guidance</p>
        </div>

        <div className="included-item">
          <div className="icon-circle"><FiPackage /></div>
          <p>Post-webinar<br />resource kit</p>
        </div>

        <div className="included-item">
          <div className="icon-circle"><FiUsers /></div>
          <p>Mentor support<br />after the session</p>
        </div>
      </div>

      {/* RIBBON BANNER */}
      <div className="ribbonss-wrapper">
        <div className="ribbonss">
          <p>
            Open to all! Limited to just <strong>300 participants.</strong>
          </p>
        </div>
        <div className="ribbonss-shadow"></div>
      </div>

    </section>
  );
};

export default IncludedForAttendees;
