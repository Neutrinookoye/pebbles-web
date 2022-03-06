import * as types from '../types/index'

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case types.USER_REGISTER_REQUEST:
			return { loading: true }
		case types.USER_REGISTER_SUCCESS:
			return { loading: false, userDetail: action.payload }
		case types.USER_REGISTER_FAIL:
			return { loading: false, error: action.payload }
		case types.USER_REGISTER_RESET:
			return {}
		default:
			return state
	}
}

export const getOTPReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_OTP_REQUEST:
			return { loading: true }
		case types.GET_OTP_SUCCESS:
			return { loading: false, userOtp: action.payload }
		case types.GET_OTP_FAIL:
			return { loading: false, error: action.payload }
		case types.GET_OTP_RESET:
			return {}
		default:
			return state
	}
}

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case types.USER_AUTH_REQUEST:
			return { loading: true }
		case types.USER_AUTH_SUCCESS:
			return { loading: false, userDetail: action.payload }
		case types.USER_AUTH_FAIL:
			return { loading: false, error: action.payload }
		case types.USER_AUTH_LOGOUT:
			return {}
		default:
			return state
	}
}

export const getUserProfileReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_USER_PROFILE_REQUEST:
			return { ...state, loading: true }
		case types.GET_USER_PROFILE_SUCCESS:
			return { loading: false, userProfile: action.payload }
		case types.GET_USER_PROFILE_FAIL:
			return { loading: false, error: action.payload }
		case types.GET_USER_PROFILE_RESET:
			return {}
		default:
			return state
	}
}
