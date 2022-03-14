import * as types from '../types/index'

export const createApartmentReducer = (state = {}, action) => {
	switch (action.type) {
		case types.CREATE_APARTMENT_REQUEST:
			return { loading: true }
		case types.CREATE_APARTMENT_SUCCESS:
			return { loading: false, apartment: action.payload }
		case types.CREATE_APARTMENT_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const getUserApartmentReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_USER_APARTMENTS_REQUEST:
			return { loading: true }
		case types.GET_USER_APARTMENTS_SUCCESS:
			return { loading: false, apartments: action.payload }
		case types.GET_USER_APARTMENTS_FAIL:
			return { loading: false, error: action.payload }
		case types.GET_USER_APARTMENTS_RESET:
			return {}
		default:
			return state
	}
}
