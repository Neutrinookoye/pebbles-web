import * as types from '../types/index'
import axios from 'axios'
import toast from 'react-hot-toast'
import config from '../config'
import { authHeader, header } from '../headers'
import { user_logout } from './userActions'

const url = config.baseUrl

export const create_booking = (obj) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.CREATE_BOOKING_REQUEST })

		const {
			userLogin: { userDetail },
		} = getState()

		const { data } = await axios.post(`${url}/bookings/create-booking`, obj, {
			headers: authHeader(userDetail.token),
		})

		if (data.message === 'success') {
			dispatch({
				type: types.CREATE_BOOKING_SUCCESS,
				payload: data,
			})
			toast.success('Apartment Booked Successfully!', {
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
		dispatch({ type: types.CREATE_BOOKING_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_apartment_bookings = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_BOOKED_APARTMENTS_REQUEST })

		const {
			userLogin: { userDetail },
		} = getState()

		const { data } = await axios.get(
			`${url}/bookings/busines-individual-booking`,
			{
				headers: authHeader(userDetail.token),
			}
		)

		if (data.message === 'success') {
			dispatch({
				type: types.GET_BOOKED_APARTMENTS_SUCCESS,
				payload: data.data,
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(user_logout())
		}
		dispatch({ type: types.GET_BOOKED_APARTMENTS_FAIL, payload: message })
	}
}

export const get_user_apartment_bookings = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_BOOKED_APARTMENTS_REQUEST })

		const {
			userLogin: { userDetail },
		} = getState()

		const { data } = await axios.get(`${url}/bookings/booking-by-userId`, {
			headers: authHeader(userDetail.token),
		})

		if (data.message === 'success') {
			dispatch({
				type: types.GET_BOOKED_APARTMENTS_SUCCESS,
				payload: data.data,
			})
		}
	} catch (error) {
		const message = error.response
			? error.response.message
			: 'Something went wrong'
		if (message === 'Not Authorized') {
			dispatch(user_logout())
		}
		dispatch({ type: types.GET_BOOKED_APARTMENTS_FAIL, payload: message })
	}
}
