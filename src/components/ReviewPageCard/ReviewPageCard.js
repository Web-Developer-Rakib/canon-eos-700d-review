import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./ReviewPageCard.css";

const ReviewPageCard = (props) => {
  const { id, image, name, comment, rating } = props.review;
  return (
    <div className="card" key={id}>
      <div className="card-top">
        <img src={image} alt="" />
        <h3>{name}</h3>
      </div>
      <h4>
        {
          <Rating
            initialRating={rating}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
            }
            readonly
          ></Rating>
        }{" "}
        {rating}
      </h4>
      <p>{comment}</p>
    </div>
  );
};

export default ReviewPageCard;
