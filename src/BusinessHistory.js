import React, { useState, useEffect } from "react";
import BuisnessCard from './BusinessCard'
const BusinessHistory = () => {
  return(
    <div className="businesshistory"><span>Business History</span>
        <BuisnessCard place="Clubpetro" jobtitle="Fullstack Developer" date="2018 - Now" />
        <BuisnessCard place="Clubpetro" jobtitle="Fullstack Developer" date="2018 - Now" />
        <BuisnessCard place="Clubpetro" jobtitle="Fullstack Developer" date="2018 - Now" />
        <BuisnessCard place="Clubpetro" jobtitle="Fullstack Developer" date="2018 - Now" />
    </div>
  
    );
};

export default BusinessHistory;
