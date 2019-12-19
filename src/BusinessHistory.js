import React, { useState, useEffect } from "react";
import BusinessCard from './BusinessCard'
const BusinessHistory = () => {
  return(
    <div className="businesshistory"><span>Business History</span>
        <BusinessCard place="Clubpetro" jobtitle="Fullstack Developer" date="2018 - Now" />
        <BusinessCard place="Atlas Soluções em Tecnologia" jobtitle="Fundador / Vice-Presidência" date="2017 - 2018" />
        <BusinessCard place="FEJEMG" jobtitle="Coordenador de T.I" date="2016 - 2017" />
        <BusinessCard place="Unifei Projetos" jobtitle="Gerente de T.I" date="2015 - 2017" />

    </div>
  
    );
};

export default BusinessHistory;
