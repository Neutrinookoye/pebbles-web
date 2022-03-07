import React, { Suspense } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import './App.css'
import Preloader from './components/Preloader'
import Index from './pages/dashboard/Index'
import DashboardApartmentAdd from './pages/dashboard/dashboardAapartmentAdd/DashboardApartmentAdd'
import DashboardHome from './pages/dashboard/dashboardHome/DashboardHome'
import DashboardProfile from './pages/dashboard/dashboardprofile/DashboardProfile'
import { Toaster } from 'react-hot-toast'
import HomePage from './pages/HomePage/HomePage'
import Login from './pages/auth/Login'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
import Signup from './pages/auth/Signup'
import BecomeHost from './pages/auth/BecomeHost'
import ConfirmNumber from './pages/auth/ConfirmNumber'
import StartBooking from './pages/auth/StartBooking'
import ExploreEvents from './pages/EventsPages/ExploreEvents'
import EventsInfo from './pages/EventsPages/EventsInfo'
import ExploreApartments from './pages/exploreMoreApartments/ExploreMoreApartments'
import ApartmentInfo from './pages/exploreMoreApartments/ApartmentInfo'
import MyApartment from './pages/myApartments/MyApartment'
import MyApartmentInfo from './pages/myApartments/MyApartmentInfo'
import SignupIndividual from './pages/auth/SignupIndividual'
import SignupBusiness from './pages/auth/SignupBusiness'
// import DashboardHome from "./pages/dashboard/dashboardHome/DashboardHome";

function App() {
	return (
		<div className='App'>
			<Suspense fallback={<Preloader />}>
				<BrowserRouter>
					<Routes>
						<Route exact path='/login' element={<Login />} />
						<Route exact path='/forgot-password' element={<ForgotPassword />} />
						<Route exact path='/reset-password' element={<ResetPassword />} />
						<Route exact path='/signup' element={<Signup />} />
						<Route
							exact
							path='/become-host/individual'
							element={<SignupIndividual />}
						/>
						<Route
							exact
							path='/become-host/business'
							element={<SignupBusiness />}
						/>
						<Route exact path='/become-host' element={<BecomeHost />} />
						<Route exact path='/confirm-number' element={<ConfirmNumber />} />
						<Route exact path='/start-booking' element={<StartBooking />} />
						<Route exact path='/' element={<HomePage />} />
						<Route exact path='/explore-events' element={<ExploreEvents />} />
						<Route exact path='/events-info' element={<EventsInfo />} />
						<Route
							path='/app'
							element={<Navigate replace to='/app/dashboard/' />}
						/>
						<Route path='/app' element={<Index />}>
							<Route
								path={`dashboard/profile`}
								element={<DashboardProfile />}
							/>
							<Route
								path={`apartment/add`}
								element={<DashboardApartmentAdd />}
							/>
							<Route path={`dashboard`} element={<DashboardHome />} />
						</Route>
						<Route
							exact
							path='/explore-apartments'
							element={<ExploreApartments />}
						/>
						<Route
							exact
							path='/become-host/individual'
							element={<SignupIndividual />}
						/>
						<Route
							exact
							path='/become-host/business'
							element={<SignupBusiness />}
						/>
						<Route exact path='/apartment-info' element={<ApartmentInfo />} />
						<Route exact path='/my-apartment' element={<MyApartment />} />
						<Route
							exact
							path='/my-apartment-info'
							element={<MyApartmentInfo />}
						/>
						{/* <Route exact path="/dashboard" component={DashboardHome} /> */}
					</Routes>
				</BrowserRouter>
			</Suspense>
			<Toaster />
		</div>
	)
}

export default App
