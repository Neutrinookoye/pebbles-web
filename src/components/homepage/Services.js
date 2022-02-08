import React from 'react'
import '../homepage/css/services.css'

import LuxuryLogo from '../homepage/img/icons/luxury-apartment.png'
import StrongTeamLogo from '../homepage/img/icons/strong-team.png'
import LocationLogo from '../homepage/img/icons/best-location.png'
import HealthyFoodLogo from '../homepage/img/icons/healthy-food.png'
import AddsOnLogo from '../homepage/img/icons/adds-on.png'


const Services = () => {
    return (
        <section className="services-section">
            <div className="services-wrapper">
                <h2>What We Offer</h2>
                <div className="services">
                    <div className="service service1">
                        <img src={LuxuryLogo} alt="" />
                        <h4>Luxury Apartment</h4>
                        <p>We offer the finest of apartments  with beautiful aesthetics pleasing to your very eyes</p>
                    </div>

                    <div className="service service2">
                        <img src={StrongTeamLogo} alt="" />
                        <h4>Strong Team</h4>
                        <p>We have the best teams in place to provide you with the comfort you desire</p>
                    </div>
                    <div className="service service3">
                        <img src={LocationLogo} alt="" />
                        <h4>Best Location</h4>
                        <p>We bring to you the  safest, serene and condusive environment</p>
                    </div>
                    <div className="service service4">
                        <img src={HealthyFoodLogo} alt="" />
                        <h4>Healthy Food</h4>
                        <p>We have the best teams in place to provide you with the comfort you  desire</p>
                    </div>
                    <div className="service service5">
                        <img src={AddsOnLogo} alt="" />
                        <h4>Adds On</h4>
                        <p>Book our apartments and you have get paid acess to mobility, good food, Laundry and also Events</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Services
