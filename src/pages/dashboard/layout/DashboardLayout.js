import React, { useState, useEffect, cloneElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useNavigate, useLocation } from 'react-router-dom'
import { user_logout } from '../../../redux/actions/userActions'

import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import Navigation from '../../../components/Navigation'
import BreadCrumb from '../../../components/BreadCrumb'
import Dropdown from 'react-bootstrap/Dropdown'
import menu from '../../../components/Navigation/menu'

import './DashboardLayout.scss'
import pics from '../../../assets/pics.png'

const DashboardLayout = (props) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [allow, setAllow] = useState(false)

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

	const checkPermissionHandler = (pathname) => {
		let check = menu.items[0].children.find((e) => e.url == pathname)
		if (check) {
			if (check.permission.includes(userLogin.userDetail.userDetails.role)) {
				setAllow(true)
			} else {
				setAllow(false)
				navigate('/dashboard/home') //Navigate to a common page
			}
		} else {
			console.log('Path not found') //Navigate to 404 page
		}
	}

	useEffect(() => {
		if (!userLogin?.userDetail) {
			return <Navigate to='/login' />
		}
	}, [userLogin])

	useEffect(() => {
		if (userLogin?.userDetail) {
			checkPermissionHandler(location.pathname)
		}
	}, [userLogin, location])

	return allow ? (
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
	) : (
		<></>
	)
}

export default DashboardLayout
