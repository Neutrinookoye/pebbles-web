import React, { useEffect } from 'react'
import AdminHeader from '../../../components/AdminHeader/AdminHeader'
import { useSelector, useDispatch } from 'react-redux'
import { get_user_apartment } from '../../../redux/actions/apartmentAction'
import Loader from '../../../components/Loader'
import { GET_USER_APARTMENTS_RESET } from '../../../redux/types'

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
				<div className='dashboardmain__apartment'>
					<div className='row'>
						{apartments.apartments.map((apa, i) => (
							<div className='col-md-12'>
								<div className='row'>
									<div className='col-md-3'>
										<img
											src={apa.apartmentImages[0]}
											alt=''
											style={{ width: '100%' }}
										/>
									</div>
									<div className='col-md-6'>
										<p> {apa.apartmentName} </p>
										<div className='d-flex'>
											<p>{apa.numberOfBedrooms} Bedrooms . </p>
											<p> {apa.numberOfToilets} Toilets . </p>
											<p> {apa.numberOfRooms} Parlors </p>
										</div>
									</div>
									<div className='col-md-3'></div>
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
