import React from 'react'
import { Link } from 'react-router-dom'
import { SRLWrapper } from 'simple-react-lightbox'
import Slider from 'react-slick'
import { comma } from '../helpers'
import star from '../../img/Shape.png'

const Body = ({
	image1,
	image1Alt,
	image2,
	image2Alt,
	image3,
	images,
	image3Alt,
	bedroomNo,
	bathroomNo,
	guestNo,
	parlorNo,
	apartmentPrice,
}) => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	let i = 0

	return (
		<section className='apartment-info-body'>
			<div className='body-wrapper'>
				<Slider {...settings}>
					{images &&
						images.map((e) => (
							<div key={i++} className=''>
								<img
									src={e}
									alt={image1Alt}
									style={{ width: '100%', height: '22rem' }}
								/>
							</div>
						))}
				</Slider>
				{/* <Slider {...settings}>
						<div className='apartment-images'>
							<div className='col-md-4'>
								<img
									src={image1}
									alt={image1Alt}
									style={{ width: '22rem', height: '22rem' }}
								/>
							</div>

							<div className='col-md-4'>
								<img
									src={image2}
									alt={image2Alt}
									style={{ width: '22rem', height: '22rem' }}
								/>
							</div>

							<div className='apartment-img-container'>
								<img
									src={image3}
									alt={image3Alt}
									style={{ width: '22rem', height: '22rem' }}
								/>
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
							<button className='more-photos'>More photos</button>
						</div>
					</Slider> */}
				<div className='apartment__info__wrapper mt-5'>
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
							<div className='col-md-12'>
								<div>
									<form action=''>
										<div className='row no-gutters'>
											<div className='col-md-6'>
												<label htmlFor=''>Check-in</label>
												<span>
													From: <input type='date' name='' id='' />{' '}
												</span>
											</div>
											<div className='col-md-6'>
												<label htmlFor=''>Check-out</label>
												<span>
													To: <input type='date' name='' id='' />{' '}
												</span>
											</div>
											<div className='col-md-12'>
												<label htmlFor=''>Guest</label>
												<input type='number' required />
											</div>
											<div className='col-md-12'>
												<button type='submit' className='btn add-review'>
													Check availability
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Body
