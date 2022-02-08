import React from "react";
import Button from "../Button";
import {
  faHome,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FeaturedHousesNavbar = () => {
  return (
    <div className="house-nav-cntr">
      <p className="note">Our Recommendation</p>
      <div className="house-nav">
        <div className="title">
          <h2>Featured House</h2>
          <div className="tag">
            <FontAwesomeIcon className="home-icon" icon={faHome} /> Apartments
          </div>
        </div>
        <div class="house-nav-btns">
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
          <Link to="/explore-apartments">
            <Button text="View More" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHousesNavbar;
