import React, { useState, useEffect } from "react";
import DisplayImage from "./DisplayImage";
import NameProfession from "./NameProfession";
import BusinessHistory from "./BusinessHistory";
const LeftBar = () => {
  return (
    <div className="leftbar">
      <DisplayImage />
      <NameProfession />
      <BusinessHistory />
    </div>
  );
};

export default LeftBar;
