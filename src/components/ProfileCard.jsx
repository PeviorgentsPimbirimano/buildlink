import React from "react";
import "./ProfileCard.css";

export default function ProfileCard({ occupation, name, image, type = "Company" }) {
  return (
    <div className="profilecard-outer">
      <div className="profilecard-bgshape"></div>
      <div className="profilecard-main">
        <div className="profilecard-imgwrap">
          <img src={image} alt={name} className="profilecard-img" />
        </div>
        <div className="profilecard-info-row">
          <span className="profilecard-occupation">{occupation}</span>
          <span className="profilecard-name">{name}</span>
        </div>
        <div className="profilecard-footer-row">
          <span className="profilecard-type">{type}</span>
          <span className="profilecard-verified">
            <img src="src\assets\Vector.png" alt="" />
            verified
          </span>
        </div>
      </div>
    </div>
  );
}