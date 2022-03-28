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

export const getApartmentDetailsReducer = (
	state = { apartmentDetails: {} },
	action
) => {
	switch (action.type) {
		case types.GET_APARTMENT_DETAILS_REQUEST:
			return { ...state, loading: true, apartmentDetails: {} }
		case types.GET_APARTMENT_DETAILS_SUCCESS:
			return { loading: false, apartmentDetails: action.payload }
		case types.GET_APARTMENT_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
				apartmentDetails: {},
			}
		case types.GET_APARTMENT_DETAILS_RESET:
			return {}
		default:
			return state
	}
}

export const searchApartmentReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SEARCH_APARTMENTS_REQUEST:
			return { loading: true }
		case types.SEARCH_APARTMENTS_SUCCESS:
			return { loading: false, apartSearchs: action.payload }
		case types.SEARCH_APARTMENTS_FAIL:
			return { loading: false, error: action.payload }
		case types.SEARCH_APARTMENTS_RESET:
			return {}
		default:
			return state
	}
}

export const updateApartmentDetailReducer = (state = {}, action) => {
	switch (action.type) {
		case types.UPDATE_APARTMENT_DETAILS_REQUEST:
			return { loading: true }
		case types.UPDATE_APARTMENT_DETAILS_SUCCESS:
			return { loading: false, apartment: action.payload }
		case types.UPDATE_APARTMENT_DETAILS_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const getNearbyApartmentsReducer = (
	state = { nearbyApartments: [] },
	action
) => {
	switch (action.type) {
		case types.GET_NEARBY_APARTMENTS_REQUEST:
			return { loading: true, nearbyApartments: [] }
		case types.GET_NEARBY_APARTMENTS_SUCCESS:
			return { loading: false, nearbyApartments: action.payload }
		case types.GET_NEARBY_APARTMENTS_FAIL:
			return { loading: false, error: action.payload, nearbyApartments: [] }
		case types.GET_NEARBY_APARTMENTS_RESET:
			return {}
		default:
			return state
	}
}
