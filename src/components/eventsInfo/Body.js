import React from "react";
import { Link } from "react-router-dom";
import Button from "../homepage/Button";

const Body = ({
  image1,
  image1Alt,
  image2,
  image2Alt,
  image3,
  image3Alt,
  ticketPrice,
}) => {
  return (
    <section className="event-info-body">
      <div className="body-wrapper">
        <div className="event-images">
          <div className="event-img-container">
            <img src={image1} alt={image1Alt} />
          </div>

          <div className="event-img-container">
            <img src={image2} alt={image2Alt} />
          </div>

          <div className="event-img-container">
            <img src={image3} alt={image3Alt} />
            <p className="more-photos">
              <Link to="#/">More photos</Link>
            </p>
          </div>

          {/* <button className="more-photos">More photos</button> */}
        </div>

        <div className="event__info__wrapper">
          <div className="event-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>

          <div className="buy-ticket-btn">
            <p className="cta-ticket1">Buy Ticket</p>
            <p className="cta-ticket2">{ticketPrice}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
