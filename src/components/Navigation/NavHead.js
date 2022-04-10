import React from 'react'
import { Link } from 'react-router-dom'

const NavHead = (props) => {
	let toggleClass = ['mobile-menu']
	if (props.collapseMenu) {
		toggleClass = [...toggleClass, 'on']
	}

	return (
		<div className='navbar-brand header-logo'>
			<Link to={'/'} className='b-brand'>
				<div className='b-bg'>
					<i className='feather icon-home' />
				</div>
				<span className='b-title'>Pebbles </span>
			</Link>
			<Link
				to={'#'}
				className={toggleClass.join(' ')}
				id='mobile-collapse'
				onClick={props.onToggleNavigation}
			>
				<span />
			</Link>
		</div>
	)
}

export default NavHead
