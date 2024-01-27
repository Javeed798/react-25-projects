import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleClick = (id) => {
    setRating(id);
  };

  const handleMouseEnter = (id) => {
    setHover(id);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="flex flex-wrap">
      {[...Array(noOfStars)].map((_, index) => {
        index = index + 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "text-yellow-400" : ""}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={50}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
