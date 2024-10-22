import React, { useState } from 'react';
import './rating-star.css';

const RatingStar = ({ totalStars = 5, onRating }) => {
  const [rating, setRating] = useState(totalStars);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (ratingValue) => {
    setRating(ratingValue);
    if (onRating) {
      onRating(ratingValue);
    }
  };

  const handleMouseEnter = (ratingValue) => {
    setHoverRating(ratingValue);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="star-rating">
      {/* here */}
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={index}
            className={`star ${ratingValue <= (hoverRating || rating) ? 'filled' : ''}`}
            onClick={() => handleClick(ratingValue)}
            onMouseEnter={() => handleMouseEnter(ratingValue)}
            onMouseLeave={handleMouseLeave}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default RatingStar;
