import React from "react";
import './Card.css'
import noImagePic from '../.././no-image.png'


function Card(props) {
  return (
    <div className="card custom-card main-card">
      <img src={props.image !=="" ? props.image : noImagePic} className="card-img-top" alt="" />
      <div className="card-body card-details">
        <h3 className="card-title">{props.title}</h3>
      </div>
    </div>
  );
}

export default Card;
