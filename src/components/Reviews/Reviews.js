import React from "react";
import { useLoadData } from "../../Hooks/useLoadData";
import ReviewPageCard from "../ReviewPageCard/ReviewPageCard";
import "./Reviews.css";

const Reviews = () => {
  const [reviews] = useLoadData();
  return (
    <section className="reviews-section">
      <h1>See all reviews</h1>
      <div className="review-cards">
        {reviews.map((review) => (
          <ReviewPageCard review={review}></ReviewPageCard>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
