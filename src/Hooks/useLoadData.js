const { useState, useEffect } = require("react");

const useLoadData = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return [reviews];
};
export { useLoadData };
