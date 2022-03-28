import * as types from '../types/index'
import axios from 'axios'
import toast from 'react-hot-toast'
import config from '../config'
import { authHeader, header } from '../headers'

const url = config.baseUrl

export const user_register = (obj) => async (dispatch) => {
	try {
		dispatch({ type: types.USER_REGISTER_REQUEST })

		const { data } = await axios.post(`${url}/users`, obj, {
			headers: header,
		})

		if (data.message === 'success') {
			dispatch({
				type: types.USER_REGISTER_SUCCESS,
				payload: data,
			})
			toast.success('User Created Successfully!', {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(user_logout())
		}
		dispatch({ type: types.USER_REGISTER_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_otp = (obj) => async (dispatch) => {
	try {
		dispatch({ type: types.GET_OTP_REQUEST })

		const { data } = await axios.post(`${url}/send-token`, obj, {
			headers: header,
		})

		if (data.status === 200) {
			dispatch({
				type: types.GET_OTP_SUCCESS,
				payload: data.data,
			})
			console.log(data)
			toast.success(`${data.message}`, {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(user_logout())
		}
		dispatch({ type: types.GET_OTP_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const user_login = (obj) => async (dispatch) => {
	try {
		dispatch({ type: types.USER_AUTH_REQUEST })

		const { data } = await axios.post(`${url}/users/login`, obj, {
			headers: header,
		})

		if (data.message === 'success') {
			dispatch({
				type: types.USER_AUTH_SUCCESS,
				payload: data.data,
			})
			toast.success('User Login Successful!', {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(user_logout())
		}
		dispatch({ type: types.USER_AUTH_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const user_logout = () => (dispatch) => {
	dispatch({ type: types.USER_AUTH_LOGOUT })
	document.location.href = '/'
}

export const get_user_details = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_USER_PROFILE_REQUEST })

		const {
			userLogin: { userDetail },
		} = getState()

		const { data } = await axios.get(`${url}/users/`, {
			headers: authHeader(userDetail.token),
		})

		if (data.message === 'success') {
			dispatch({
				type: types.GET_USER_PROFILE_SUCCESS,
				payload: data.data,
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(user_logout())
		}
		dispatch({ type: types.GET_USER_PROFILE_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const update_user = (obj) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.USER_UPDATE_REQUEST })

		const {
			userLogin: { userDetail },
		} = getState()

		const { data } = await axios.put(`${url}/users`, obj, {
			headers: authHeader(userDetail.token),
		})

		if (data.message === 'success') {
			dispatch({
				type: types.USER_UPDATE_SUCCESS,
				payload: data.data,
			})
			dispatch(get_user_details())
			toast.success('User account has been updated!', {
				position: 'top-right',
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(user_logout())
		}
		dispatch({ type: types.USER_UPDATE_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}
