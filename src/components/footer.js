import React from "react";
import "../Style/footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* LEFT CONTENT */}
        <div className="footer-left">
          <p className="footer-description">
            NIM Academy helps learners become skilled IT professionals by offering
            high-quality, practical, and industry-relevant education. IT Courses
            in Web Development, Data Analytics, AI & More.
          </p>

          <div className="footer-social">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>

        {/* RIGHT LINKS */}
        <div className="footer-right">
          <div className="footer-links">
            <a href="/accessibility">Accessibility on Ocean School</a>
            <a href="/privacy">Privacy policy</a>
            <a href="/terms">Terms and conditions ↗</a>
            <a href="/credits">Credits</a>
          </div>

          <div className="footer-links">
            <a href="/help">Help Centre ↗</a>
            <a href="/partners">Partners</a>
            <a href="/nfb">NFB Education ↗</a>
            <a href="/donate">Make a donation ↗</a>
            <a href="/about">About us</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default SiteFooter;
