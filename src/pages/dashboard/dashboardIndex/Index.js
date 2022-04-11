import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import DashboardLayout from '../layout/DashboardLayout'

function Index(props) {
	// const userLogin = useSelector((state) => state.userLogin)
	// const { userDetail } = userLogin

	return (
		<DashboardLayout>
			<Outlet />
		</DashboardLayout>
	)
}

export default Index
