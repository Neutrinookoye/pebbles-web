import React from "react";
import {
  faCheckCircle,
  faDotCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Heading = ({
  yearJoined,
  location,
  bedroom,
  type,
  apartmentName,
  agentAvatar,
  agentName,
  ratings,
  review,
}) => {
  return (
    <div className="apartment-info-heading">
      <div className="heading-wrapper">
        <div className="apartment-details">
          <h1>{apartmentName}</h1>

          <div className="ratings-card">
            <p>
              <FontAwesomeIcon className="star" icon={faStar} />
              <span className="ratings">{ratings} </span>
              <span className="review-count"> ({review} reviews)</span>
            </p>
          </div>

          <div className="tags">
            <button>{location}</button>
            <button>{bedroom}</button>
            <button>{type}</button>
          </div>
        </div>

        <div className="agent-details">
          <div className="agent-avatar">
            <img src={agentAvatar} alt="" />
          </div>

          <h3>
            {agentName}{" "}
            <FontAwesomeIcon className="icon" icon={faCheckCircle} />
          </h3>

          <p className="special-l">
            Agent <FontAwesomeIcon icon={faDotCircle} /> Joined {yearJoined}
          </p>

          {/* <p className="special-ls">Contact Agent</p> */}
        </div>
      </div>
    </div>
  );
};

export default Heading;
