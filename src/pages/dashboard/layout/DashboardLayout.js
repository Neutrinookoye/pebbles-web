import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { user_logout } from '../../../redux/actions/userActions'

import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import Navigation from '../../../components/Navigation'
import BreadCrumb from '../../../components/BreadCrumb'
import Dropdown from 'react-bootstrap/Dropdown'

import './DashboardLayout.scss'
import pics from '../../../assets/pics.png'

const DashboardLayout = (props) => {
	const dispatch = useDispatch()

	const userLogin = useSelector((state) => state.userLogin)
	const { userDetail } = userLogin

	const handle = useFullScreenHandle()

	const [openMenu, setOpenMenu] = useState(false)

	const toggleMenu = (e) => {
		e.preventDefault()
		setOpenMenu(!openMenu)
	}

	const outsideClick = (e) => {
		setOpenMenu(false)
	}

	const logoutHandler = (e) => {
		e.preventDefault()
		dispatch(user_logout())
	}

	const location = useLocation()

	if (!userLogin?.userDetail) {
		return <Navigate to='/login' />
	}

	return (
		<FullScreen handle={handle}>
			<Navigation openMenu={openMenu} toggleMenu={outsideClick} />
			<div className='pcoded-main-container'>
				<div className='pcoded-wrapper'>
					<div className='pcoded-content'>
						<div className='pcoded-inner-content'>
							<div className='d-flex justify-content-between dashboard__name'>
								<BreadCrumb loc={location} />
								<div className='nav_header'>
									<Dropdown style={{ display: 'inline' }} className='drp-user'>
										<Dropdown.Toggle variant={'link'} id='dropdown-basic'>
											<i
												style={{ color: '#707070' }}
												className='icon feather icon-settings'
											/>
										</Dropdown.Toggle>
										<Dropdown.Menu alignRight className='profile-notification'>
											<ul className='pro-body pl-0'>
												<li>
													<a
														href='#/'
														className='dropdown-item'
														onClick={logoutHandler}
													>
														<i className='feather icon-lock' /> Lock Screen
													</a>
												</li>
											</ul>
										</Dropdown.Menu>
									</Dropdown>
									{userDetail && (
										<span> {userDetail.userDetails.fullName} </span>
									)}
									<img src={pics} alt='avatar' />
								</div>
							</div>
							<div className='main-body'>
								<div className='page-wrapper'> {props.children} </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</FullScreen>
	)
}

export default DashboardLayout
