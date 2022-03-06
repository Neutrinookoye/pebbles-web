import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { user_logout } from '../../redux/actions/userActions'

import { Link } from 'react-router-dom'
import './navbarDropdown.scss'

const NavbarDropdown = ({ toggleDropdown, openLoginModal }) => {
	const dispatch = useDispatch()

	const userLogin = useSelector((state) => state.userLogin)
	const { userDetail } = userLogin

	const logoutHandler = (e) => {
		e.preventDefault()
		dispatch(user_logout())
	}

	return (
		<div className='navbarDropdown__wrapper'>
			<ul>
				<li>
					<Link onClick={() => toggleDropdown()} to='/'>
						My Apartments
					</Link>
				</li>
				<li>
					<Link onClick={() => toggleDropdown()} to='/'>
						List an Apartment
					</Link>
				</li>
				{userDetail && (
					<li>
						<Link onClick={() => toggleDropdown()} to='/app/dashboard'>
							My Dashboard
						</Link>
					</li>
				)}
				<li>
					<Link
						onClick={() => {
							openLoginModal()
							toggleDropdown()
						}}
						to='#/'
					>
						Login
					</Link>
				</li>
				<li>
					<Link onClick={() => toggleDropdown()} to='/signup'>
						Sign Up
					</Link>
				</li>
				<li>
					<Link onClick={() => toggleDropdown()} to='/'>
						Contact us
					</Link>
				</li>
				{userDetail && (
					<li>
						<Link
							onClick={(e) => {
								toggleDropdown()
								logoutHandler(e)
							}}
							to='/'
						>
							Sign Out
						</Link>
					</li>
				)}
			</ul>
		</div>
	)
}

export default NavbarDropdown
