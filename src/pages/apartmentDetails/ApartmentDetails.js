import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { get_apartment_details } from '../../redux/actions/apartmentActions'
import { GET_APARTMENT_DETAILS_RESET } from '../../redux/types'
import Loader from '../../components/Loader'
import '../myApartments/myApartmentsInfo.scss'
import NavBar from '../../components/homepage/NavBar'
import SubNavBar from '../../components/homepage/SubNavBar'
import Heading from '../../components/myApartmentsInfo/Heading'
import Body from '../../components/myApartmentsInfo/Body'
import SideAttraction from '../../components/myApartmentsInfo/SideAttraction'
import { Reviews } from '../../components/myApartmentsInfo/reviews/Reviews'
import Map from '../../components/myApartmentsInfo/Map'
import Subscription from '../../components/myApartmentsInfo/Subscription'
import SearchLinks from '../../components/myApartmentsInfo/SearchLinks'
import Footer from '../../components/homepage/Footer'
import avatar from '../../components/myApartmentsInfo/img/avatar.png'

const ApartmentDetails = () => {
	const dispatch = useDispatch()

	const params = useParams()

	const getApartmentDetails = useSelector((state) => state.getApartmentDetails)
	const { loading, apartmentDetails } = getApartmentDetails
	console.log(apartmentDetails)

	const apartmentInfo = {
		apartmentName: 'ABC Homes, 3 Bedroom Flat',
		location: 'Gbagada',
		bedroom: '3Bedroom',
		type: 'Modern',
		ratings: 4.6,
		review: 23,
		agentAvatar: avatar,
		agentName: 'Kareem Abu',
		yearJoined: 2020,
		image1Alt: '',
		image2Alt: '',
		image3Alt: '',
		image4Alt: '',
		image5Alt: '',
		bedroomNo: 2,
		bathroomNo: 3,
		guestroomNo: 1,
		apartmentPrice: 'N590,000',
	}

	useEffect(() => {
		dispatch(get_apartment_details(params.id))
		return () => {
			dispatch({ type: GET_APARTMENT_DETAILS_RESET })
		}
	}, [dispatch, params.id])

	return (
		<div>
			<NavBar />
			<SubNavBar />
			{loading ? (
				<Loader />
			) : (
				<>
					<Heading
						apartmentName={
							apartmentDetails &&
							apartmentDetails.apartment &&
							apartmentDetails.apartment.apartmentName
						}
						location={
							apartmentDetails &&
							apartmentDetails.apartment &&
							apartmentDetails.apartment.address
						}
						bedroom={
							apartmentDetails &&
							apartmentDetails.apartment &&
							apartmentDetails.apartment.numberOfBedrooms + ' ' + 'Bedrooms'
						}
						type={
							apartmentDetails &&
							apartmentDetails.apartment &&
							apartmentDetails.apartment.typeOfApartment
						}
						ratings={apartmentInfo.ratings}
						review={apartmentInfo.review}
						agentAvatar={apartmentInfo.agentAvatar}
						agentName={apartmentInfo.agentName}
						yearJoined={apartmentInfo.yearJoined}
					/>
					<Body
						image1={
							apartmentDetails &&
							apartmentDetails.apartment &&
							apartmentDetails.apartment.apartmentImages[0]
						}
						image1Alt={apartmentInfo.image1Alt}
						image2={
							apartmentDetails &&
							apartmentDetails.apartment &&
							apartmentDetails.apartment.apartmentImages[1]
						}
						image2Alt={apartmentInfo.image2Alt}
						image3={
							apartmentDetails &&
							apartmentDetails.apartment &&
							apartmentDetails.apartment.apartmentImages[2]
						}
						image3Alt={apartmentInfo.image3Alt}
						image4={
							apartmentDetails &&
							apartmentDetails.apartment &&
							apartmentDetails.apartment.apartmentImages[3]
						}
						image4Alt={apartmentInfo.image3Alt}
						image5={
							apartmentDetails &&
							apartmentDetails.apartment &&
							apartmentDetails.apartment.apartmentImages[4]
						}
						image5Alt={apartmentInfo.image3Alt}
						images={
							apartmentDetails &&
							apartmentDetails.apartment &&
							apartmentDetails.apartment.apartmentImages
						}
						bedroomNo={
							apartmentDetails &&
							apartmentDetails.apartment &&
							apartmentDetails.apartment.numberOfBedrooms
						}
						bathroomNo={
							apartmentDetails &&
							apartmentDetails.apartment &&
							apartmentDetails.apartment.numberOfToilets
						}
						parlorNo={
							apartmentDetails &&
							apartmentDetails.apartment &&
							apartmentDetails.apartment.numberOfRooms
						}
						guestNo={
							apartmentDetails &&
							apartmentDetails.apartment &&
							apartmentDetails.apartment.numberOfGuests
						}
						apartmentPrice={
							apartmentDetails &&
							apartmentDetails.apartment &&
							apartmentDetails.apartment.price
						}
					/>
					<SideAttraction
						facilities={
							apartmentDetails &&
							apartmentDetails.apartment &&
							apartmentDetails.apartment.facilities
						}
					/>
					<Reviews />
					<Map />
					<Subscription />
				</>
			)}
			<SearchLinks />
			<Footer />
		</div>
	)
}

export default ApartmentDetails
