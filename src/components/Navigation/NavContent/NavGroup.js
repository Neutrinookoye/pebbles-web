import React from 'react'
import NavCollapse from './NavCollapse'
import NavItem from './NavItem'
import { useSelector } from 'react-redux'

const NavGroup = ({ nav, permission }) => {
	console.log(nav)
	let navContent

	if (nav.children) {
		const groups = nav.children
		navContent = Object.keys(groups).map((item) => {
			item = groups[item]
			switch (item.type) {
				case 'collapse':
					return (
						// <NavCollapse
						// 	key={item.id}
						// 	collapse={item}
						// 	permission={permission}
						// 	type='main'
						// />
						<></>
					)
				case 'item':
					return item.permission.includes(permission) ? (
						<NavItem key={item.id} item={item} permission={permission} />
					) : (
						<></>
					)
				default:
					return false
			}
		})
	}

	return (
		<>
			<li className='nav-item pcoded-menu-caption'>
				<label>{nav.title}</label>
			</li>
			{navContent}
		</>
	)
}

export default NavGroup
