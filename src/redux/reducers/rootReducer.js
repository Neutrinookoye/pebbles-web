import { combineReducers } from 'redux'
import {
	createApartmentReducer,
	getApartmentDetailsReducer,
	getUserApartmentReducer,
} from './apartmentReducer'
import {
	createBookingReducer,
	getBookedApartmentReducer,
} from './bookingReducer'

import {
	userRegisterReducer,
	userLoginReducer,
	getUserProfileReducer,
} from './userReducer'

const reducer = combineReducers({
	userRegister: userRegisterReducer,
	userLogin: userLoginReducer,
	getUserProfile: getUserProfileReducer,

	createApartment: createApartmentReducer,
	getUserApartment: getUserApartmentReducer,
	getApartmentDetails: getApartmentDetailsReducer,

	createBooking: createBookingReducer,
	getBookedApartment: getBookedApartmentReducer,
})

export default reducer
