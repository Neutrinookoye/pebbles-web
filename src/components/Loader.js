import React from 'react'
import loader from '../assets/pulse.gif'

const Loader = () => {
	return (
		<div className='text-center'>
			<img src={loader} alt='loading...' width='5%' height='5%' />
		</div>
	)
}

export default Loader
