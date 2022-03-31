import React from 'react'
import { Link } from 'react-router-dom'
import { SRLWrapper } from 'simple-react-lightbox'
import { comma } from '../helpers'
import star from '../../img/Shape.png'

const Body = ({
	image1,
	image1Alt,
	image2,
	image2Alt,
	image3,
	image3Alt,
	bedroomNo,
	bathroomNo,
	guestNo,
	parlorNo,
	apartmentPrice,
}) => {
	return (
		<section className='apartment-info-body'>
			<div className='body-wrapper'>
				<SRLWrapper>
					<div className='apartment-images'>
						<div className='apartment-img-container'>
							<a href={image1}>
								<img src={image1} alt={image1Alt} />
							</a>
						</div>

						<div className='apartment-img-container'>
							<img src={image2} alt={image2Alt} />
						</div>

						<div className='apartment-img-container'>
							<img src={image3} alt={image3Alt} />
						</div>
						<div className='apartment-img-container'>
							<img src={image2} alt={image2Alt} />
						</div>

						<div className='apartment-img-container'>
							<img src={image3} alt={image3Alt} />
							<p className='more-photos'>
								<Link to='#/'>More photos</Link>
							</p>
						</div>
						{/* <button className="more-photos">More photos</button> */}
					</div>
				</SRLWrapper>

				<div className='apartment__info__wrapper'>
					<div className='apartment-description'>
						<div className='rooms'>
							<span>
								<p className='numbers'>{bedroomNo}</p>
								<p>Bedrooms</p>
							</span>
							<span>
								<p className='numbers'>{bathroomNo}</p>
								<p>Bathrooms</p>
							</span>
							<span>
								<p className='numbers'>{parlorNo}</p>
								<p>Parlours</p>
							</span>
							<span>
								<p className='numbers'>{guestNo}</p>
								<p>Required Guests</p>
							</span>
						</div>
						<p className='description'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident.
						</p>
					</div>

					{/* <div className='buy-ticket-btn'>
						<p className='cta-edit'>Edit</p>
						<p className='cta-delete'>Delete</p>
						<p className='cta-price'>{apartmentPrice}</p>
					</div> */}

					<div className=''>
						<div className='row'>
							<div className='col-6'>
								<p> N{comma(apartmentPrice)}/ night </p>
							</div>
							<div className='col-6'>
								<span>
									<img src={star} alt='' /> 4.6 (23 reviews)
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Body
