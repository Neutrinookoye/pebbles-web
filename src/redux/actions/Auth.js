import axios from "axios";
import config from "../../config";

export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const GET_OTP_SUCCESS = "GET_OTP_SUCCESS";
export const GET_OTP_FAIL = "GET_OTP_FAIL";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const LOGOUT = "LOGOUT";

export const LOGIN_LOADING = "LOGIN_LOADING";

export const RESET_TO_FALSE = "RESET_TO_FALSE";

export const resetAllToFalse = () => (dispatch) => {
  dispatch({
    type: RESET_TO_FALSE,
  });
};

// Login User
export const loginUsers = (values) => async (dispatch) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(values);

  try {
    const res = await axios.post(
      `${config.baseUrl}/users/login`,
      body,
      headers
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res?.data,
    });
    console.log("login", res?.data);
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: LOGIN_FAIL,
    });
    return error;
  }
};

// Get otp
export const getOtp = (values) => async (dispatch) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(values);

  try {
    const res = await axios.post(`${config.baseUrl}/send-token`, body, headers);
    dispatch({
      type: GET_OTP_SUCCESS,
      payload: res?.data,
    });
    console.log("GET_OTP", res?.data);
  } catch (error) {
    console.log("GET_OTP", error);
    dispatch({
      type: GET_OTP_FAIL,
    });
    return error;
  }
};

// Signup User
export const signUpUsers = (values) => async (dispatch) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // const body = JSON.stringify(values);

  try {
    const res = await axios.post(`${config.baseUrl}/users`, values, headers);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res?.data,
    });
    console.log("login", res?.data);
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: SIGNUP_FAIL,
    });
    return error;
  }
};

// LOGOUT
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
