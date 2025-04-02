import React from "react";
import FacebookOutLinedIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YoutubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";
function Footer() {
  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">
        <div className="footer-icons">
          <FacebookOutLinedIcon />
          <InstagramIcon />
          <YoutubeIcon />
        </div>
        <div className="footer-data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>GiftCards</li>
              <li>Terns of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact US</li>
            </ul>
          </div>
        </div>
        <div className="service-code">
          <p>service code</p>
        </div>
        <div className="copy-write">&copy; 1997-2025 Netflix, Inc</div>
      </div>
    </div>
  );
}

export default Footer;
