import React from "react";
import "./ProfileCard.css";
import { Link } from "react-router-dom";

export default function ProfileCard({ occupation, name, image, type = "Company" }) {
  return (
    <div className="profilecard-outer">
      <div className="profilecard-bgshape"></div>
      <div className="profilecard-main">
        <div className="profilecard-imgwrap">
          <div className="profile-overlay">
          <Link to="/HandymanService"><img src={image} alt={name} className="profilecard-img" /></Link>
          </div>
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