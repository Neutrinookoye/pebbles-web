import React from 'react'

import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'

const FeaturedHousesCard = ({ houses }) => {
	//  constructor(props){
	//   super(props);
	//   this.next = this.next.bind(this);
	//   this.previous = this.previous.bind(this);
	// }
	// next(){
	//   this.slider.slickNext();
	// }
	// previous(){
	//   this.slider.slickPrev();
	// }

	var settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		adaptiveHeight: true,
		variableWidth: true,
		// centerMode: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}
	return (
		<Slider {...settings} className='featured-houses'>
			{houses.map((house) => (
				<div className='post-card' key={house._id}>
					<Link to={`/apartments/${house._id}`}>
						<div className='post-image'>
							<img src={house.apartmentImages[0]} alt='' />
						</div>
					</Link>
					<div className='body'>
						<p className='post-title'>{house.apartmentName}</p>
						<p className='price'>N{house.price}</p>

						<div className='houses'>
							<div className='amenities'>
								<span className='bedroom'>
									{house.numberOfBedrooms} bedroom
								</span>
								<span className='toilet'>
									<FontAwesomeIcon className='dot' icon={faCircle} />{' '}
									{house.numberOfToilets} toilet
								</span>
								<span className='parlor'>
									<FontAwesomeIcon className='dot' icon={faCircle} />{' '}
									{house.numberOfRooms} parlor
								</span>
							</div>
							<div className='user'>
								<img className='user-avatar' src={house.ownerAvatar} alt='' />
								<div className='user-details'>
									<p className='name'>{house.ownerName}</p>
									<p className='location'>{house.address}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</Slider>
	)
}

export default FeaturedHousesCard
