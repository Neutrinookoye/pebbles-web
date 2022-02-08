import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyApartmentCard = ({ apartments }) => {
  return (
    <div className="my-apartment">
      {apartments.map((apartment) => (
        <div className="post-card" key={apartment.id}>
          <div className="post-image">
            <img src={apartment.postImage} alt="" />
          </div>
          <div className="body">
            <p className="post-title">{apartment.postTitle}</p>
            <p className="price">{apartment.apartmentPrice}</p>

            <div className="apartments">
              <div className="amenities">
                <span className="bedroom">{apartment.bedroomNo} bedroom</span>
                <span className="toilet">
                  <FontAwesomeIcon className="dot" icon={faCircle} />{" "}
                  {apartment.toiletNo} toilet
                </span>
                <span className="parlor">
                  <FontAwesomeIcon className="dot" icon={faCircle} />{" "}
                  {apartment.parlorNo} parlor
                </span>
              </div>
              <div className="user">
                <img
                  className="user-avatar"
                  src={apartment.ownerAvatar}
                  alt=""
                />
                <div className="user-details">
                  <p className="name">{apartment.ownerName}</p>
                  <p className="location">{apartment.apartmentLocation}</p>
                </div>
              </div>
            </div>
            <div className="delete-btn">
              <button type="button">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyApartmentCard;
