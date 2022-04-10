import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'

const NavLeft = (props) => {
	const [openSearch, setOpenSearch] = useState(false)

	const searchHandler = (e) => {
		e.preventDefault()
		setOpenSearch(!openSearch)
	}

	return (
		<ul className='navbar-nav mr-auto'>
			<li>
				<a href='#/' className='full-screen' onClick={props.handle}>
					<i className='feather icon-maximize' />
				</a>
			</li>
		</ul>
	)
}

export default NavLeft
