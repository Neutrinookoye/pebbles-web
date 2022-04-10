import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	get_apartment_bookings,
	get_user_apartment_bookings,
} from '../../../redux/actions/bookingActions'
import Loader from '../../../components/Loader'
import { GET_BOOKED_APARTMENTS_RESET } from '../../../redux/types'
import '../dashboardSavedApartments/savedApartments.scss'
import { comma } from '../../../components/helpers'
import sam from '../../../img/Samantha.png'

const SavedApartments = () => {
	const dispatch = useDispatch()

	const userLogin = useSelector((state) => state.userLogin)
	const { userDetail } = userLogin

	console.log(userDetail)

	const getBookedApartment = useSelector((state) => state.getBookedApartment)
	const { bookedApartments, loading } = getBookedApartment

	useEffect(() => {
		if (
			userDetail.userDetails.role == 'BUSINESS' ||
			userDetail.userDetails.role == 'INDIVIDUAL'
		) {
			dispatch(get_apartment_bookings())
		} else {
			dispatch(get_user_apartment_bookings())
		}

		return () => {
			dispatch({ type: GET_BOOKED_APARTMENTS_RESET })
		}
	}, [dispatch])

	return (
		<div>
			{loading ? (
				<Loader />
			) : bookedApartments &&
			  bookedApartments.bookings &&
			  bookedApartments.bookings.length > 0 ? (
				<div className='container saved_apa_cont'>
					<div className='row'>
						{bookedApartments.bookings.map((apa, i) => (
							<div className='col-md-12 saved_apartments'>
								<div className='row saved_apartments_row'>
									<div className='col-lg-3 col-md-6'>
										<img
											src={apa.apartmentImages[0]}
											alt=''
											style={{ width: '100%', height: '10rem' }}
										/>
									</div>
									<div className='col-lg-6 col-md-6'>
										<p className='saved_apartments_name'>{apa.apartmentName}</p>
										<div className='d-flex'>
											<p className='saved_apartments_stat'>
												{apa.numberOfBedrooms} Bedrooms
											</p>
											<div className='black_dot'></div>
											<p className='saved_apartments_stat'>
												{apa.numberOfToilets} Toilets
											</p>
											<span className='black_dot'></span>
											<p className='saved_apartments_stat'>
												{apa.numberOfRooms} Parlors
											</p>
										</div>
									</div>
									<div
										className='col-lg-3 col-md-12 flex_dir_col'
										style={{ position: 'relative' }}
									>
										<div className='d-flex justify-content-end'>
											<img
												src={sam}
												style={{
													height: '3.5rem',
													width: '3.5rem',
													borderRadius: '50%',
													marginRight: '.5rem',
												}}
												alt=''
												className='img-fluid'
											/>
											<div>
												<h5
													style={{
														fontWeight: '400',
														fontSize: '16px',
														color: '#A4A6B3',
													}}
												>
													Alex Sam
												</h5>
												<p
													style={{
														fontWeight: '400',
														fontSize: '14px',
														color: '#333333',
													}}
												>
													Ikeja, Lagos
												</p>
											</div>
										</div>
										<div
											style={{ position: 'absolute', bottom: '0', right: '0' }}
										>
											<p>
												<strong> {comma(apa.price)}</strong> / Night
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			) : (
				<span>No Bookings Found.</span>
			)}
		</div>
	)
}

export default SavedApartments
