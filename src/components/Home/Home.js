import React from "react";
import { useLoadData } from "../../Hooks/useLoadData";
import HeroImg from "../../Images/eos-700-d.jpg";
import HomePageCard from "../HomePageCard/HomePageCard";
import "./Home.css";

const Home = () => {
  const [reviews] = useLoadData();
  const reviewSlice = reviews.slice(0, 3);
  return (
    <div>
      <section className="hero-section">
        <div className="hero-txt">
          <h1>
            Take a more detailed look into the
            <span className="names-color"> Canon EOS 700D</span>
          </h1>
          <p>
            Step into DSLR photography and let your creativity grow. Produce
            superb photos and video with an 18-megapixel sensor and enjoy
            shooting with an easy to use Vari-angle Clear View LCD II Touch
            screen.
          </p>
          <button className="See-more-btn">SEE MORE</button>
        </div>
        <div className="hero-img">
          <img src={HeroImg} alt="" />
        </div>
      </section>
      <section className="review-section">
        <h1 className="section-title">Reviews</h1>
        <div className="card-section">
          {reviewSlice.map((review) => (
            <HomePageCard review={review}></HomePageCard>
          ))}
        </div>
        <button className="See-more-btn review-btn">SEE MORE REVIEWS</button>
      </section>
    </div>
  );
};

export default Home;
