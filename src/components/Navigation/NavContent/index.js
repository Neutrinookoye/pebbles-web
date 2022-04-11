import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import NavGroup from './NavGroup'

const NavContent = ({ navigation, permission }) => {
	return (
		<div className='navbar-content datta-scroll'>
			<PerfectScrollbar>
				<ul className='nav pcoded-inner-navbar'>
					{navigation.map((nav) => (
						<NavGroup nav={nav} permission={permission} />
					))}
				</ul>
			</PerfectScrollbar>
		</div>
	)
}

export default NavContent
