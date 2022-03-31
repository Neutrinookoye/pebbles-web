import React from 'react'
import { Link } from 'react-router-dom'

const SearchLinks = () => {
	return (
		<section className='search-links'>
			<nav>
				<div className='cntr'>
					<h3 className='heading'>Pebbles signature</h3>
					<p>
						Pebbles signature is a platform to ease access to getting service
						apartments.
					</p>
				</div>
				<div className='cntr'>
					<h3 className='heading'>Popular apartments</h3>
					<ul>
						<li>
							<Link to='#'>3 Bedroom Flat at Bariga</Link>
						</li>
						<li>
							<Link to='#'>Self contained at Omole</Link>
						</li>
						<li>
							<Link to='#'>3 Duplex at Aguda</Link>
						</li>
						<li>
							<Link to='#'>2 Bedroom Flat at Surulere</Link>
						</li>
						<li>
							<Link to='#'>Ensuite 3 Bedroom at Ikeja</Link>
						</li>
					</ul>
				</div>
				<div className='cntr'>
					<h3 className='heading'>Popular Areas</h3>
					<ul>
						<li>
							<Link to='#'>Ikeja(230)</Link>
						</li>
						<li>
							<Link to='#'>Lekki (140)</Link>
						</li>
						<li>
							<Link to='#'>Yaba (223)</Link>
						</li>
						<li>
							<Link to='#'>Surulere (822)</Link>
						</li>
						<li>
							<Link to='#'>Ketu (182)</Link>
						</li>
					</ul>
				</div>
			</nav>
		</section>
	)
}

export default SearchLinks
