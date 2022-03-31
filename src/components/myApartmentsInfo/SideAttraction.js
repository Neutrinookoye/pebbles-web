import React from 'react'
import { Link } from 'react-router-dom'
import badgeEmoji from '../myApartmentsInfo/img/badge-emoji.png'
import bulbEmoji from '../myApartmentsInfo/img/bulb-emoji.png'
import carEmoji from '../myApartmentsInfo/img/car-emoji.png'
import carkeyEmoji from '../myApartmentsInfo/img/carkey-emoji.png'
import showerEmoji from '../myApartmentsInfo/img/shower-emoji.png'
import wallEmoji from '../myApartmentsInfo/img/wall-emoji.png'

const SideAttraction = ({ facilities }) => {
	return (
		<section className='apartments-side-attractions'>
			<div className='attraction-wrapper'>
				<div className='title'>
					<h2>Side Attractions</h2>
					<p>This are the interesting activities to spice up the apartment</p>
				</div>

				<div className='body'>
					{/* facilities.map() */}
					<figure>
						<img src={showerEmoji} alt='popcorn emoji' />
						<figcaption>Water</figcaption>
					</figure>

					<figure>
						<img src={bulbEmoji} alt='headset emoji' />
						<figcaption>Electricity</figcaption>
					</figure>

					<figure>
						<img src={carkeyEmoji} alt='table tennis bat and ball emoji' />
						<figcaption>Ensuite</figcaption>
					</figure>

					<figure>
						<img src={carEmoji} alt='laughing emoji' />
						<figcaption>Car Ride</figcaption>
					</figure>

					<figure>
						<img src={badgeEmoji} alt='badge emoji' />
						<figcaption>Security</figcaption>
					</figure>

					<figure>
						<img src={wallEmoji} alt='wall emoji' />
						<figcaption>Tiled</figcaption>
					</figure>
				</div>

				<p className='attractions-link'>
					<Link to='#'>See all facilities</Link>
				</p>
			</div>
		</section>
	)
}

export default SideAttraction
