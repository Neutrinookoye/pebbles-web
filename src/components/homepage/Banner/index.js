import React from 'react'
import '../../homepage/css/banner.css'
import SearchBar from './SearchBar'

const Banner = () => {
    return (
        <header>
            <div className="header-image">
                    <h2>We have the best of service apartments in your neighbourhood
                    </h2>
                <SearchBar />
            </div>
        </header>
    )
}

export default Banner
