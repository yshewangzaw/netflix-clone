import React from "react";
import "./header.css";
import logo from "../../assets/images/NetFlixLogo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="showcase">
        <div className="showcase-top">
          <img src={logo} alt="logo" />
          <Link to="/netflix-show" className="btn btn-xl">
            Sign In
          </Link>
        </div>
        <div className="showcase-content">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <Link to="/netflix-show" className="btn btn-xl">
            Watch Free for 30 Days
            <i className="fas fa-chevron-right btn-icon"></i>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
