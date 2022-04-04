import React from "react";
import Reviewer from "../Images/eos-700-d.jpg";
import "./Reviews.css";

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h1>See all reviews</h1>
      <div className="review-cards">
        <div className="card">
          <div className="card-top">
            <img src={Reviewer} alt="" />
            <h3>Name</h3>
          </div>
          <h4>Ratings</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut odit
            ratione saepe dignissimos nobis odio corporis, delectus natus
            provident dolor! Maiores, amet nam sunt dolorem qui eius aliquam
            earum ab!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
