import React, { useEffect } from 'react'
import AdminHeader from '../../../components/AdminHeader/AdminHeader'
import { useSelector, useDispatch } from 'react-redux'
import { get_user_apartment } from '../../../redux/actions/apartmentActions'
import Loader from '../../../components/Loader'
import { GET_USER_APARTMENTS_RESET } from '../../../redux/types'
import './savedApartments.scss'
import { comma } from '../../../components/helpers'

const SavedApartments = () => {
	const dispatch = useDispatch()

	const getUserApartment = useSelector((state) => state.getUserApartment)
	const { apartments, loading } = getUserApartment

	useEffect(() => {
		dispatch(get_user_apartment())
		console.log(apartments)
		return () => {
			dispatch({ type: GET_USER_APARTMENTS_RESET })
		}
	}, [dispatch])

	return (
		<div>
			<AdminHeader title={'Saved Apartments'} />
			{loading ? (
				<Loader />
			) : apartments &&
			  apartments.apartments &&
			  apartments.apartments.length > 0 ? (
				<div className='container saved_apa_cont'>
					<div className='row'>
						{apartments.apartments.map((apa, i) => (
							<div className='col-md-12 saved_apartments mb-4'>
								<div className='row saved_apartments_row'>
									<div className='col-md-3'>
										<img
											src={apa.apartmentImages[0]}
											alt=''
											style={{ width: '100%', height: '10rem' }}
										/>
									</div>
									<div className='col-md-6'>
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
									<div className='col-md-3'>
										<p>
											{' '}
											<strong> {comma(apa.price)}</strong> / Night
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			) : (
				<span>No Apartments Found.</span>
			)}
		</div>
	)
}

export default SavedApartments
