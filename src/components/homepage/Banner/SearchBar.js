import React, { useState } from 'react'
import '../../homepage/css/banner.css'
import {
	faSearch,
	faMapPin,
	faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import 'react-dates/initialize'

import guestIcon from '../img/icons/house2-icon.svg'

const SearchBar = () => {
	const [show, setShow] = useState(false)
	const [show1, setShow1] = useState(false)

	const [location, setLocation] = useState('')
	const [checkin, setCheckin] = useState('')
	const [apartmentType, setApartmentType] = useState('')
	const [checkout, setCheckout] = useState('')

	const showToggler = () => {
		setShow(!show)
		setShow1(false)
	}

	const showToggler1 = () => {
		setShow1(!show1)
		setShow(false)
	}

	return (
		<div className='search-bar'>
			<form className='search-form' style={{ position: 'relative' }}>
				<div className='form-inputs'>
					<div className='form-input-group'>
						<label className='form-input-label' htmlFor='location'>
							<FontAwesomeIcon className='icon' icon={faMapPin} />
							Location
						</label>
						<input
							className='form-input'
							type='text'
							name='location'
							value={location}
							placeholder='Preferred location'
							onChange={(e) => setLocation(e.target.value)}
						/>
					</div>

					<div className='form-input-group'>
						<label
							className='form-input-label'
							htmlFor='checkIn'
							onClick={showToggler}
							style={{ cursor: 'pointer' }}
						>
							<FontAwesomeIcon className='icon' icon={faCalendarAlt} />
							Check-in
						</label>
						<input
							className='form-input'
							style={{ visibility: 'hidden' }}
							type='date'
							name='checkIn'
							placeholder='From'
						/>
					</div>
					{show && (
						<Calendar
							className='cal1'
							onChange={(e) => setCheckin(e.target.value)}
							minDate={new Date()}
							value={checkin}
						/>
					)}

					<div className='form-input-group'>
						<label
							className='form-input-label'
							htmlFor='checkOut'
							onClick={showToggler1}
							style={{ cursor: 'pointer' }}
						>
							<FontAwesomeIcon className='icon' icon={faCalendarAlt} />
							Check-out
						</label>
						<input
							className='form-input'
							style={{ visibility: 'hidden' }}
							type=''
							name='checkOut'
							placeholder='To'
						/>
					</div>
					{show1 && (
						<Calendar
							className='cal2'
							onChange={(e) => setCheckout(e.target.value)}
							minDate={new Date()}
							value={checkout}
						/>
					)}

					<div className='form-input-group'>
						<label className='form-input-label' htmlFor='guestNo'>
							<img className='icon' style={{ color: '#707070'}} src={guestIcon} alt='' />
							Apartment
						</label>
						{/* <input
							className='form-input'
							type='text'
							name='guestNo'
							placeholder='0'
							pattern='[0-9]'
							value={noOfGuest}
							onChange={(e) => setNoOfGuest(e.target.value)}
						/> */}
						<select onChange={(e) => setApartmentType(e.target.value)} className='form-control' >
							<option value="">-- select --</option>
							<option value="BQ">BQ</option>
							<option value="Studio">Studio</option>
							<option value="1 Bedroom Flat">1 Bedroom Flat</option>
							<option value="2 Bedrooms Flat">2 Bedrooms Flat</option>
							<option value="3 Bedrooms Flat">3 Bedrooms Flat</option>
							<option value="4 Bedrooms Flat">4 Bedrooms Flat</option>
							<option value="5 Bedrooms Flat">5 Bedrooms Flat</option>
							<option value="6 Bedrooms Flat">6 Bedrooms Flat</option>
							<option value="7 Bedrooms Flat">7 Bedrooms Flat</option>
							<option value="8 Bedrooms Flat">8 Bedrooms Flat</option>
							<option value="9 Bedrooms Flat">9 Bedrooms Flat</option>							
							<option value="10 Bedrooms Flat">10 Bedrooms Flat</option>

							<option value="Flat">Flat</option>
							<option value="Hotel Boutique">Hotel Boutique</option>
							<option value="Terrace">Terrace</option>
							<option value="Bungalow">Bungalow</option>
							<option value="Detached">Detached</option>
							<option value="Semi-Detached">Semi-Detached</option>
							<option value="Cottage/Farmhouse/Ranch">Cottage/Farmhouse/Ranch</option>
							<option value="Villa/Mansions">Villa/Mansions</option>
						</select>
					</div>
				</div>

				<div className='search-btn'>
					<button className='search-icon' name='submit' type='submit'>
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</div>
			</form>
		</div>
	)
}

export default SearchBar
