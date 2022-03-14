import React from 'react'
import { useSelector } from 'react-redux'
import pics from '../../assets/pics.png'
function AdminHeader({ title }) {
	const userLogin = useSelector((state) => state.userLogin)
	const { userDetail, error } = userLogin

	return (
		<header className='dashboardmain__header'>
			<h3 className='dashboard__heading'>{title}</h3>
			<div className='dashboard__name'>
				<h3>
					{userDetail && <span> {userDetail.userDetails.fullName} </span>}
				</h3>
				<img src={pics} alt='avatar' />
			</div>
		</header>
	)
}

export default AdminHeader
