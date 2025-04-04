import React from "react";
import { tableLables } from "./constant";
import { Link } from "react-router-dom";
import "./Tabs.css";

function Tabs({ activeTabName, onclickTab }) {
  const { CANCEL_AT_ANY_TIME, PICK_YOUR_PRICE, WATCH_ANYWHERE } = tableLables;

  const renderTabTitle = (tabTitle, isActive, icon, id) => (
    <div
      onClick={() => onclickTab(tabTitle)}
      id={id}
      className={`tab-item ${isActive ? "tab-border" : ""}`} // Fixed template literal
    >
      <i className={icon}></i>
      <p>{tabTitle}</p>
    </div>
  );

  return (
    <div>
      <section className="tabs">
        <div className="container">
          {renderTabTitle(
            CANCEL_AT_ANY_TIME,
            activeTabName === CANCEL_AT_ANY_TIME,
            "fas fa-door-open fa-3x",
            "tab-1" // Added missing comma
          )}
          {renderTabTitle(
            WATCH_ANYWHERE,
            activeTabName === WATCH_ANYWHERE,
            "fas fa-tablet-alt fa-3x",
            "tab-2"
          )}
          {renderTabTitle(
            PICK_YOUR_PRICE,
            activeTabName === PICK_YOUR_PRICE,
            "fas fa-tags fa-3x",
            "tab-3" // Changed id to "tab-3"
          )}
        </div>
      </section>
      {activeTabName === CANCEL_AT_ANY_TIME && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-1-content"
              className={`tab-content-item ${
                activeTabName === CANCEL_AT_ANY_TIME ? "active" : ""
              }`}
            >
              <div className="tab-1-content-inner">
                <div>
                  <p className="text-lg">
                    If you decide Netflix isn't for you, no problem. No
                    commitment. Cancel online.
                  </p>
                  <Link to="/netflix-show" className="btn btn-lg">
                    Watch free for 30 days
                  </Link>
                </div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Tabs;
