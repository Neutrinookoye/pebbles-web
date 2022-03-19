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

import guestIcon from '../img/icons/guest-icon.png'

const SearchBar = () => {
	const [show, setShow] = useState(false)
	const [show1, setShow1] = useState(false)

	const [location, setLocation] = useState('')
	const [checkin, setCheckin] = useState('')
	const [noOfGuest, setNoOfGuest] = useState('')
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
							<img className='icon' src={guestIcon} alt='' />
							No. of Guest
						</label>
						<input
							className='form-input'
							type='text'
							name='guestNo'
							placeholder='0'
							pattern='[0-9]'
							value={noOfGuest}
							onChange={(e) => setNoOfGuest(e.target.value)}
						/>
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
