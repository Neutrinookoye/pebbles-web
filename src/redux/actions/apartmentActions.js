import * as types from '../types/index'
import axios from 'axios'
import toast from 'react-hot-toast'
import config from '../config'
import { authHeader, header } from '../headers'
import { user_logout } from './userActions'

const url = config.baseUrl

export const create_apartment = (obj) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.CREATE_APARTMENT_REQUEST })

		const {
			userLogin: { userDetail },
		} = getState()

		const { data } = await axios.post(`${url}/apartments`, obj, {
			headers: authHeader(userDetail.token),
		})

		if (data.message === 'success') {
			dispatch({
				type: types.CREATE_APARTMENT_SUCCESS,
				payload: data,
			})
			toast.success('Apartment Created Successfully!', {
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
		dispatch({ type: types.CREATE_APARTMENT_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_user_apartment = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_USER_APARTMENTS_REQUEST })

		const {
			userLogin: { userDetail },
		} = getState()

		const { data } = await axios.get(`${url}/apartments/user`, {
			headers: authHeader(userDetail.token),
		})

		if (data.message === 'success') {
			dispatch({
				type: types.GET_USER_APARTMENTS_SUCCESS,
				payload: data.data,
			})
			// toast.success('Apartment Created Successfully!', {
			// 	position: 'top-right',
			// })
		}
	} catch (error) {
		const message = error.response
			? error.response.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(user_logout())
		}
		dispatch({ type: types.GET_USER_APARTMENTS_FAIL, payload: message })
	}
}

export const get_apartment_details = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_APARTMENT_DETAILS_REQUEST })

		const {
			userLogin: { userDetail },
		} = getState()

		const { data } = await axios.get(`${url}/apartments/${id}`, {
			headers: authHeader(userDetail.token),
		})

		if (data.message === 'success') {
			dispatch({
				type: types.GET_APARTMENT_DETAILS_SUCCESS,
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
		dispatch({ type: types.GET_APARTMENT_DETAILS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}
