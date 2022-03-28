import { combineReducers } from 'redux'
import {
	createApartmentReducer,
	getApartmentDetailsReducer,
	getUserApartmentReducer,
	searchApartmentReducer,
	updateApartmentDetailReducer,
	getNearbyApartmentsReducer,
} from './apartmentReducer'
import {
	createBookingReducer,
	getBookedApartmentReducer,
} from './bookingReducer'

import {
	userRegisterReducer,
	userLoginReducer,
	getUserProfileReducer,
	userUpdateReducer,
} from './userReducer'

const reducer = combineReducers({
	userRegister: userRegisterReducer,
	userLogin: userLoginReducer,
	getUserProfile: getUserProfileReducer,
	userUpdate: userUpdateReducer,

	createApartment: createApartmentReducer,
	getUserApartment: getUserApartmentReducer,
	getApartmentDetails: getApartmentDetailsReducer,
	searchApartment: searchApartmentReducer,
	updateApartmentDetail: updateApartmentDetailReducer,
	getNearbyApartments: getNearbyApartmentsReducer,

	createBooking: createBookingReducer,
	getBookedApartment: getBookedApartmentReducer,
})

export default reducer
