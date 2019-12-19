import React, { useState, useEffect } from "react";
const BusinessCard = ({place, jobtitle, date}) => {
  return (
    <div className="businesscard">
        <div className="image">a</div>
        <div className="information">
            <div className="place">{place}</div>
            <div className="jobtitle"> {jobtitle}</div>
            <div className="date">{date}</div>
        </div>
    </div>
    
  );
};

export default BusinessCard;
