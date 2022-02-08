import React from 'react'

const LocationCard = ({ image, location, distance }) => {
    return (
        <div className="individual-card">
            <span className="image">
                <img src={image} alt="" />
            </span>
            <span className="details">
                <p className="location">{location}</p>
                <p className="distance">{distance}</p>
            </span>
        </div>
    )
}

export default LocationCard
