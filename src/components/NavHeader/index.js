import React from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'

const NavHeader = (props) => {
	return (
		<header className={`navbar pcoded-header navbar-expand-lg header-default`}>
			<div className='m-header'>
				{/* <a
					className={`mobile-menu ${props.openMenu && "on"}`}
					id="mobile-collapse1"
					href={"/#"}
					onClick={props.toggleMenu}
				>
					<span />
				</a> */}
				{/* <a href={'/#'} className='b-brand'>
					<div className='b-bg'>
						<i className='feather icon-trending-up' />
					</div>
					<span className='b-title'>Datta Able</span>
				</a> */}
			</div>
			<a className='mobile-menu' id='mobile-header' href={'/#'}>
				<i className='feather icon-more-horizontal' />
			</a>
			<div className='collapse navbar-collapse'>
				<NavLeft handle={props.handle} />
				<NavRight />
			</div>
		</header>
	)
}

export default NavHeader
