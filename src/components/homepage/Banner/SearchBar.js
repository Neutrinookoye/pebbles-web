import React from 'react'
import '../../homepage/css/banner.css'
import { faSearch, faMapPin, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import guestIcon from "../img/icons/guest-icon.png"

const SearchBar = () => {
    return (
        <div className="search-bar">
            <form className="search-form">
                <div className="form-inputs">
                    <div className="form-input-group">
                        <label className="form-input-label" htmlFor="location">
                            <FontAwesomeIcon className="icon" icon={faMapPin} />Location</label>
                        <input className="form-input" type="text" name="location" placeholder="Preferred location" />
                    </div>

                    <div className="form-input-group">
                        <label className="form-input-label" htmlFor="checkIn">
                            <FontAwesomeIcon className="icon" icon={faCalendarAlt} />Check-in</label>
                        <input className="form-input" type="" name="checkIn" placeholder="From" />
                    </div>

                    <div className="form-input-group">
                        <label className="form-input-label" htmlFor="checkOut">
                            <FontAwesomeIcon className="icon" icon={faCalendarAlt} />Check-out</label>
                        <input className="form-input" type="" name="checkOut" placeholder="To" />
                    </div>

                    <div className="form-input-group">
                        <label className="form-input-label" htmlFor="guestNo">
                            <img className="icon" src={guestIcon} alt="" />No. of Guest</label>
                        <input className="form-input" type="text" name="guestNo" placeholder="0" pattern="[0-9]" />
                    </div>
                </div>

                <div className="search-btn">
                    <button className="search-icon" name="submit" type="submit" ><FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </form>


        </div>
    )
}

export default SearchBar
