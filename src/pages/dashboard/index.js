import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import DashboardLayout from './layout/DashboardLayout'

function Dashboard(props) {
	const userLogin = useSelector((state) => state.userLogin)
	const { userDetail } = userLogin

	return (
		<DashboardLayout>
			<Outlet />
			{/* <Switch>
        <Route path={`${path}/dashboard/profile`}>
          <DashboardProfile />
        </Route>
        <Route path={`${path}/apartment/add`}>
          <DashboardApartmentAdd />
        </Route>
        <Route path={`${path}/dashboard`}>
          <DashboardHome />
        </Route>
      </Switch> */}
		</DashboardLayout>
	)
}

export default Dashboard
