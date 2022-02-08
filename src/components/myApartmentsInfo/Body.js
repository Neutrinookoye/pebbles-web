import React from "react";
import { Link } from "react-router-dom";

const Body = ({
  image1,
  image1Alt,
  image2,
  image2Alt,
  image3,
  image3Alt,
  bedroomNo,
  bathroomNo,
  guestroomNo,
  apartmentPrice,
}) => {
  return (
    <section className="apartment-info-body">
      <div className="body-wrapper">
        <div className="apartment-images">
          <div className="apartment-img-container">
            <img src={image1} alt={image1Alt} />
          </div>

          <div className="apartment-img-container">
            <img src={image2} alt={image2Alt} />
          </div>

          {/* <div className="apartment-img-container">
            <img src={image3} alt={image3Alt} />
          </div>
          <div className="apartment-img-container">
            <img src={image2} alt={image2Alt} />
          </div> */}

          <div className="apartment-img-container">
            <img src={image3} alt={image3Alt} />
            <p className="more-photos">
              <Link to="#/">More photos</Link>
            </p>
          </div>

          {/* <button className="more-photos">More photos</button> */}
        </div>

        <div className="apartment__info__wrapper">
          <div className="apartment-description">
            <div className="rooms">
              <span>
                <p className="numbers">{bedroomNo}</p>
                <p>Bedrooms</p>
              </span>
              <span>
                <p className="numbers">{bathroomNo}</p>
                <p>Bathrooms</p>
              </span>
              <span>
                <p className="numbers">{guestroomNo}</p>
                <p>Guestroom</p>
              </span>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>

          <div className="buy-ticket-btn">
            <p className="cta-edit">Edit</p>
            <p className="cta-delete">Delete</p>
            <p className="cta-price">{apartmentPrice}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
