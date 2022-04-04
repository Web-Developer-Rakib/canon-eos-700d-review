import React from "react";
import "./ReviewPageCard.css";

const ReviewPageCard = (props) => {
  const { id, image, name, comment, rating } = props.review;
  return (
    <div className="card" key={id}>
      <div className="card-top">
        <img src={image} alt="" />
        <h3>{name}</h3>
      </div>
      <h4>{rating} Star</h4>
      <p>{comment}</p>
    </div>
  );
};

export default ReviewPageCard;
