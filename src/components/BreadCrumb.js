import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import nav from './Navigation/menu'

const BreadCrumb = ({ loc }) => {
	const [main, setMain] = useState({})
	const [item, setItem] = useState({})

	useEffect(() => {
		nav.items.map((item, index) => {
			if (item.type && item.type === 'group') {
				getCollapse(item, index)
			}
			return false
		})
	}, [loc])
	console.log(item)

	const getCollapse = (item) => {
		if (item.children) {
			item.children.filter((collapse) => {
				if (collapse.type && collapse.type === 'collapse') {
					getCollapse(collapse)
				} else if (collapse.type && collapse.type === 'item') {
					if (collapse.url === loc.pathname) {
						setItem(item)
						setMain(collapse)
					}
				}
				return false
			})
		}
	}

	console.log(item)

	return (
		<div className='page-header'>
			<div className='page-block'>
				<div className='row align-items-center'>
					<div className='col-md-12'>
						{/* <div className='page-header-title'>
							<h5 className='m-b-10'>{main.title}</h5>
						</div> */}
						<ul className='breadcrumb'>
							<li className='breadcrumb-item'>
								<Link to='/'>
									<i className='feather icon-home' />
								</Link>
							</li>
							{item.type === 'collapse' && (
								<li className='breadcrumb-item'>
									<Link to='#'>{item.title}</Link>
								</li>
							)}
							{main.type === 'item' && (
								<li className='breadcrumb-item'>
									<Link to='#'>{main.title}</Link>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BreadCrumb
