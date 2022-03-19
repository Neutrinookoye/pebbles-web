import * as types from '../types/index'

export const createBookingReducer = (state = {}, action) => {
	switch (action.type) {
		case types.CREATE_BOOKING_REQUEST:
			return { loading: true }
		case types.CREATE_BOOKING_SUCCESS:
			return { loading: false, booking: action.payload }
		case types.CREATE_BOOKING_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const getBookedApartmentReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_BOOKED_APARTMENTS_REQUEST:
			return { loading: true }
		case types.GET_BOOKED_APARTMENTS_SUCCESS:
			return { loading: false, bookedApartments: action.payload }
		case types.GET_BOOKED_APARTMENTS_FAIL:
			return { loading: false, error: action.payload }
		case types.GET_BOOKED_APARTMENTS_RESET:
			return {}
		default:
			return state
	}
}
