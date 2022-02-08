import React from 'react'
import '../css/exploreApartments.css'

import LocationCard from './LocationCard'
import lekkiImage from '../img/location1.png'
import ikejaImage from '../img/location2.png'
import omoleImage1 from '../img/location3.png'
import omoleImage2 from '../img/location4.png'

const ExploreApartments = () => {
    return (
        <section className="explore-apartments">
            <div className="explore-wrapper">
                <h2>Explore apartments closest to you</h2>
                <div className="explore-cards">
                    <LocationCard
                        image={lekkiImage}
                        location="Lekki"
                        distance="30 Minutes drive"
                    />
                    <LocationCard
                        image={ikejaImage}
                        location="Ikeja"
                        distance="1 Hour drive"
                    />
                    <LocationCard
                        image={omoleImage1}
                        location="Omole"
                        distance="20 Minutes drive"
                    />
                    <LocationCard
                        image={omoleImage2}
                        location="Omole"
                        distance="20 Minutes drive"
                    />
                </div>
            </div>
        </section>
    )
}

export default ExploreApartments
