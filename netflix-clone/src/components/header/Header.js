import React from "react";
import "./header.css";
import netflixlogo from "../../assets/images/netflixlogo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="logo-and-menu">
          <img src={netflixlogo} alt="Netflix Logo" width="100" />
          <ul className="menu">
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My Lists</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="icons">
          <ul className="icon-list">
            <li>
              <SearchIcon className="icon" />
            </li>
            <li>
              <NotificationsNoneIcon className="icon" />
            </li>
            <li>
              <AccountBoxIcon className="icon" />
            </li>
            <li>
              <ArrowDropDownIcon className="icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
