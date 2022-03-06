import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../../../components/Loader'
import './DashboardProfile.scss'
import AdminHeader from '../../../components/AdminHeader/AdminHeader'
import { get_user_details } from '../../../redux/actions/userActions'

function DashboardProfile() {
	const dispatch = useDispatch()

	const [fullName, setFullName] = useState('')
	const [email, setEmail] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [state, setStatee] = useState('')
	const [country, setCountry] = useState('')
	const [city, setCity] = useState('')

	const userLogin = useSelector((state) => state.userLogin)
	const { userDetail } = userLogin

	const getUserProfile = useSelector((state) => state.getUserProfile)
	const { loading, userProfile } = getUserProfile

	useEffect(() => {
		dispatch(get_user_details())
		if (userProfile) {
			setFullName(userProfile.user.fullName)
			setEmail(userProfile.user.email)
			setPhoneNumber(userProfile.user.phoneNumber)
			setStatee(userProfile.user.state)
			setCountry(userProfile.user.country)
			setCity(userProfile.user.city)
		}
		//   return () => {
		//     second
		//   }
	}, [dispatch])

	return (
		<div className='profile'>
			<AdminHeader title={'Profile'} />
			{loading ? (
				<Loader />
			) : userProfile ? (
				<div className='dashboardmain__apartment'>
					<form className='profile__form'>
						<div className='profile__flex'>
							{/* <div className='profile__form-group'>
										<label className='profile__form-label'>Last name</label>
										<input
											type='text'
											placeholder='Doe'
											className='profile__form-input'
										/>
									</div> */}
						</div>
						<div className='profile__form-group'>
							<label className='profile__form-label'>Full name</label>
							<input
								type='text'
								placeholder='John Doe'
								className='profile__form-input'
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
							/>
						</div>
						<div className='profile__form-group'>
							<label className='profile__form-label'>Email</label>
							<input
								type='email'
								placeholder='johnDoe@gmail.com'
								className='profile__form-input'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className='profile__form-group'>
							<label className='profile__form-label'>Phone Number</label>
							<input
								type='text'
								placeholder='07012345678'
								className='profile__form-input'
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
							/>
						</div>
						<div className='profile__form-group'>
							<label className='profile__form-label'>Country</label>
							<input
								type='text'
								placeholder='Nigeria'
								className='profile__form-input'
								value={country}
								onChange={(e) => setCountry(e.target.value)}
							/>
						</div>
						<div className='profile__form-group'>
							<label className='profile__form-label'>State</label>
							<input
								type='text'
								placeholder='Lagos'
								className='profile__form-input'
								value={state}
								onChange={(e) => setStatee(e.target.value)}
							/>
						</div>
						<div className='profile__form-group'>
							<label className='profile__form-label'>City</label>
							<input
								type='text'
								placeholder='Ikeja'
								className='profile__form-input'
								value={city}
								onChange={(e) => setCity(e.target.value)}
							/>
						</div>
						{/* <div className='profile__form-group'>
									<label className='profile__form-label'>Password</label>
									<input
										type='password'
										placeholder='**********'
										className='profile__form-input'
									/>
								</div> */}
						<div className='profile__form-group'>
							<label className='profile__form-label'>Valid ID</label>
							<div className='profile__form-file'>
								<span className='profile__form-file-num'>1 item uploaded</span>
								<label>
									Select image
									<input
										id='file'
										type='file'
										placeholder='1 item uploaded'
										className='profile__form-input'
									/>
								</label>
							</div>
						</div>
						<button className='profile__button'>Edit</button>
					</form>
				</div>
			) : (
				<p>Nothing to show</p>
			)}
		</div>
	)
}

export default DashboardProfile
