import React from "react";
import "./TeamCard.css"

export default function TeamCard({teamcard}) {
  return (
    <div className="profile-card-outer">
      <div className="profile-card-inner">
        <img src={teamcard.img} alt="Tafadzwa.H" className="profile-card-img" />
        <div className="profile-card-info">
          <div>
            <span className="profile-card-label">Name:</span>
            <span className="profile-card-value">Tafadzwa.H</span>
          </div>
          <div>
            <span className="profile-card-label">Position:</span>
            <span className="profile-card-value">Co-Director</span>
          </div>
        </div>
      </div>
    </div>
  );
}