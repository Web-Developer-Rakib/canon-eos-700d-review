import React from "react";
import "./HomePageCard.css";

const HomePageCard = (props) => {
  const { id, image, name, comment, rating } = props.review;
  return (
    <div className="home-card" key={id}>
      <div className="home-card-top">
        <div className="home-card-left">
          <h3>{name}</h3>
          <h4 className="rating">{rating} Star</h4>
        </div>
        <div className="home-card-right">
          <img src={image} alt="" />
        </div>
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default HomePageCard;
