import React, { useState, useEffect } from "react";
import styled from "styled-components"


const BusinessImage = styled.div`
  background-color: yellow;
  width: 5vw;
  height: 5vw;
  background-image:url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-box-shadow: 5px 5px 3px -5px #000000;
  box-shadow: 5px 5px 3px -5px #000000; /* remove if you don't care about IE8 */
`

const BusinessCard = ({place, jobtitle, date}) => {
  
  return (
    <div className="businesscard">
        <BusinessImage image='https://cdn-ofuxico.akamaized.net/img/upload/noticias/2006/08/01/38388_36.jpg'/>
        <div className="information">
            <div className="place">{place}</div>
            <div className="jobtitle"> {jobtitle}</div>
            <div className="date">{date}</div>
        </div>
    </div>
    
  );
};


export default BusinessCard;
