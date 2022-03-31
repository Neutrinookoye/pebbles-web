import React from 'react'
import './myApartmentsInfo.scss'
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
import image1 from '../../components/myApartmentsInfo/img/image1.png'
import image2 from '../../components/myApartmentsInfo/img/image2.png'
import image3 from '../../components/myApartmentsInfo/img/image3.png'

const MyApartmentInfo = () => {
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
		image1: image1,
		image1Alt: '',
		image2: image2,
		image2Alt: '',
		image3: image3,
		image3Alt: '',
		bedroomNo: 2,
		bathroomNo: 3,
		guestroomNo: 1,
		apartmentPrice: 'N590,000',
	}

	return (
		<div>
			<NavBar />
			<SubNavBar />
			<Heading
				apartmentName={apartmentInfo.apartmentName}
				location={apartmentInfo.location}
				bedroom={apartmentInfo.bedroom}
				type={apartmentInfo.type}
				ratings={apartmentInfo.ratings}
				review={apartmentInfo.review}
				agentAvatar={apartmentInfo.agentAvatar}
				agentName={apartmentInfo.agentName}
				yearJoined={apartmentInfo.yearJoined}
			/>
			<Body
				image1={apartmentInfo.image1}
				image1Alt={apartmentInfo.image1Alt}
				image2={apartmentInfo.image2}
				image2Alt={apartmentInfo.image2Alt}
				image3={apartmentInfo.image3}
				image3Alt={apartmentInfo.image3Alt}
				bedroomNo={apartmentInfo.bedroomNo}
				bathroomNo={apartmentInfo.bathroomNo}
				guestroomNo={apartmentInfo.guestroomNo}
				apartmentPrice={apartmentInfo.apartmentPrice}
			/>
			<SideAttraction />
			<Reviews />
			<Map />
			<Subscription />
			<SearchLinks />
			<Footer />
		</div>
	)
}

export default MyApartmentInfo
