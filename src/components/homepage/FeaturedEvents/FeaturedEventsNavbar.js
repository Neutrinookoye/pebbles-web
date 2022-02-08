import React from "react";
import Button from "../Button";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FeaturedEventsNavbar = () => {
  return (
    <div className="event-nav-cntr">
      <p className="note">Our Recommendation</p>
      <div className="event-nav">
        <div className="title">
          <h2>Featured Events</h2>
        </div>
        <div class="event-nav-btns">
          <div className="nav-btns">
            <button className="prev-btn">
              <FontAwesomeIcon
                icon={faChevronLeft}
                // onClick={this.previous}
              />
            </button>
            <button className="next-btn">
              <FontAwesomeIcon
                icon={faChevronRight}
                // onClick={this.next}
              />
            </button>
          </div>
          <Link to="/explore-events">
            <Button text="View More" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEventsNavbar;
