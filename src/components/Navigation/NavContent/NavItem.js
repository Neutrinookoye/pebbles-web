import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavItem = ({ item }) => {
	const userLogin = useSelector((state) => state.userLogin)
	const { userDetail } = userLogin

	return (
		<>
			{userDetail &&
			userDetail.userDetails.role == 'USER' &&
			item.title == 'List an Apartment' ? null : (
				<li>
					<NavLink to={item.url} className='nav-link'>
						<span className='pcoded-micon'>
							<i className={item.icon} />
						</span>
						<span className='pcoded-mtext'>{item.title}</span>
					</NavLink>
				</li>
			)}
		</>
	)
}

export default NavItem
