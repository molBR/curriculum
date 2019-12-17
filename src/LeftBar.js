import React, { useState, useEffect } from "react";
import DisplayImage from "./DisplayImage";
import NameProfession from "./NameProfession";
const LeftBar = () => {
  return (
    <div className="leftbar">
      <DisplayImage />
      <NameProfession />
    </div>
  );
};

export default LeftBar;
