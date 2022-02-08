import React from "react";
import { Link } from "react-router-dom";
import "../homepage/css/subNavBar.css";

import houseIcon from "../homepage/img/icons/house-icon.svg";
import laundryIcon from "../homepage/img/icons/laundry-icon.svg";
import receiptIcon from "../homepage/img/icons/receipt-icon.svg";
import foodIcon from "../homepage/img/icons/food-icon.svg";
import carIcon from "../homepage/img/icons/car-icon.svg";
import calenderIcon from "../homepage/img/icons/calender-icon.svg";

const SubNavBar = () => {
  return (
    <nav className="subnav-bar">
      <div className="subnav-bar-wrapper">
        <div className="category">
          <Link to="/explore-apartments">
            <img src={houseIcon} alt="logo" />
            <span>Apartment</span>
          </Link>
        </div>

        <div className="category">
          <Link to="/buy-voucher">
            <img src={receiptIcon} alt="logo" />
            <span>Buy Voucher</span>
          </Link>
        </div>

        <div className="category">
          <Link to="#">
            <img src={laundryIcon} alt="logo" />
            <span>Laundry</span>
          </Link>
        </div>

        <div className="category">
          <Link to="#">
            <img src={foodIcon} alt="logo" />
            <span>Food</span>
          </Link>
        </div>

        <div className="category">
          <Link to="#">
            <img src={carIcon} alt="logo" />
            <span>Ride</span>
          </Link>
        </div>

        <div className="category">
          <Link to="/explore-events">
            <img src={calenderIcon} alt="logo" />
            <span>Events</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SubNavBar;
