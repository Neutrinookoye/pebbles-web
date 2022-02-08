import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewCard = ({ reviews }) => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    speed: 2000,
    cssEase: "linear",
    adaptiveHeight: true,
    variableWidth: true,
    centerMode: true,
  };
  return (
    <Slider {...settings} className="reviews-cntr">
      {reviews.map((review) => (
        <div className="review-card" key={review.id}>
          <div className="review-image">
            <img src={review.reviewImage} alt="" />
          </div>

          <div className="body">
            <p className="review-title">{review.reviewTitle}</p>
            <p className="description">{review.description}</p>

            <div className="user-info">
              <div className="user">
                <img className="user-avatar" src={review.userAvatar} alt="" />
                <div className="user-details">
                  <p className="name">{review.userName}</p>
                  <p className="job">{review.userJob}</p>
                </div>
              </div>
              <div className="ratings">
                <FontAwesomeIcon className="ratings-star" icon={faStar} />
                {review.starRating}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ReviewCard;
