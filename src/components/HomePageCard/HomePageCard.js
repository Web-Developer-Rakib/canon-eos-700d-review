import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./HomePageCard.css";

const HomePageCard = (props) => {
  const { id, image, name, comment, rating } = props.review;
  return (
    <div className="home-card" key={id}>
      <div className="home-card-top">
        <div className="home-card-left">
          <h3>{name}</h3>
          <h4 className="rating">
            {
              <Rating
                initialRating={rating}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={
                  <FontAwesomeIcon
                    style={{ color: "goldenrod" }}
                    icon={faStar}
                  />
                }
                readonly
              ></Rating>
            }{" "}
            {rating}
          </h4>
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
