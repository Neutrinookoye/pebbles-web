import * as types from "../types/index";
import axios from "axios";
import toast from "react-hot-toast";
import config from "../config";
import { authHeader, header } from "../headers";

const url = config.testUrl;

export const admin_login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: types.AUTH_REQUEST });

		const { data } = await axios.post(
			`${url}/admin/login`,
			{ email, password },
			{ headers: header }
		);

		if (data.status === "ok") {
			dispatch({ type: types.AUTH_SUCCESS, payload: data.data });
			toast.success(`You are welcome, ${data.data.firstName}`, {
				position: "top-right",
			});
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: "Something went wrong";
		if (message === "Not Authorized") {
			dispatch(admin_logout());
		}
		dispatch({ type: types.AUTH_FAIL, payload: message });
		toast.error(message, { position: "top-right" });
	}
};

export const admin_register = (admin) => async (dispatch, getState) => {
	try {
		console.log(admin);
		dispatch({ type: types.ADMIN_REGISTER_REQUEST });

		const {
			auth: { detail },
		} = getState();

		const { data } = await axios.post(`${url}/admin`, admin, {
			headers: authHeader(detail.token),
		});

		if (data.status === "ok") {
			dispatch({
				type: types.ADMIN_REGISTER_SUCCESS,
				payload: data.data,
			});
			toast.success("Admin Created Successfully!", {
				position: "top-right",
			});
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: "Something went wrong";
		if (message === "Not Authorized") {
			dispatch(admin_logout());
		}
		dispatch({ type: types.ADMIN_REGISTER_FAIL, payload: message });
		toast.error(message, { position: "top-right" });
	}
};

export const refresh_profile = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_ADMIN_PROFILE_REQUEST });

		const {
			auth: { detail },
		} = getState();

		const { data } = await axios.get(`${url}/admin/${id}`, {
			headers: authHeader(detail.token),
		});

		if (data.status === "ok") {
			dispatch({
				type: types.GET_ADMIN_PROFILE_SUCCESS,
				payload: data.data,
			});

			let passedData = {
				...data.data,
				token: detail.token,
				id: detail.id,
			};
			dispatch({
				type: types.AUTH_SUCCESS,
				payload: passedData,
			});
		}
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: "Something went wrong";
		if (message === "Not Authorized") {
			dispatch(admin_logout());
		}
		dispatch({ type: types.GET_ADMIN_PROFILE_FAIL, payload: message });
		toast.error(message, { position: "top-right" });
	}
};

export const admin_logout = () => (dispatch) => {
	dispatch({ type: types.AUTH_LOGOUT });
	document.location.href = "/";
};
