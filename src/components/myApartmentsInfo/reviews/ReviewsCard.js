import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

export const ReviewsCard = ({ reviews }) => {
  return (
    <div className="reviews">
      <div className="reviews-cntr">
        {reviews.map((review) => (
          <article className="post-card" key={review.id}>
            <div className="details">
              <div className="user-details">
                <div className="avatar">
                  <img src={review.userImage} alt="" />
                </div>
                <div className="user">
                  <p className="name">{review.userName}</p>
                  <p className="job">{review.userJob}</p>
                </div>
              </div>
              <p className="date">{review.date} ago</p>
            </div>
            <div className="review">
              <p>{review.review}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="footer">
        <Link>
          <p className="view-more">Read 20 more reviews</p>
        </Link>
        <div className="buttons">
          <p className="prev">
            <FontAwesomeIcon icon={faChevronLeft} />
          </p>
          <p>
            <FontAwesomeIcon className="indicator" icon={faCircle} />
            <FontAwesomeIcon className="indicator" icon={faCircle} />
            <FontAwesomeIcon className="indicator" icon={faCircle} />
          </p>
          <p className="next">
            <FontAwesomeIcon icon={faChevronRight} />
          </p>
        </div>
      </div>
    </div>
  );
};
