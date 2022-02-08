import React from 'react'
import { faSearch, faMapPin, faCalendarAlt, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
    return (
        <div className="search-bar">
            <form className="search-form">
                <div className="form-inputs">
                    <div className="form-input-group">
                        <label className="form-input-label" htmlFor="location">
                            <FontAwesomeIcon className="icon" icon={faMapPin} />Location</label>
                        <input className="form-input" type="text" name="location" placeholder="Where is the events holding?" />
                    </div>

                    <div className="form-input-group">
                        <label className="form-input-label" htmlFor="eventType">
                            <FontAwesomeIcon className="icon" icon={faFilter} />Type</label>
                        <input className="form-input" type="" name="eventType" placeholder="What type of events?" />
                    </div>

                    <div className="form-input-group">
                        <label className="form-input-label" htmlFor="eventDate">
                            <FontAwesomeIcon className="icon" icon={faCalendarAlt} />Event date</label>
                        <input className="form-input" type="" name="eventDate" placeholder="Date of Event" />
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
