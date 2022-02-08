import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  RESET_TO_FALSE,
  LOGIN_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "../actions/Auth";

const initialState = {
  access_token: localStorage.getItem("access_token"),
  isAuthenticated: JSON.parse(localStorage.getItem("data")),
  loading: false,
  data: null,
  updateAccount: [],
  isUpdateAccount: false,
  loginSuccess: [],
  isError: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case RESET_TO_FALSE:
      return {
        ...state,
        isError: false,
        loading: false,
      };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("access_token", payload.data?.token);
      localStorage.setItem("data", JSON.stringify(payload.data));
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: true,
      };
    case USER_LOADED:
      localStorage.setItem("user", JSON.stringify(payload.data));
      return {
        ...state,
        data: payload.data,
        loading: false,
      };
    case LOGOUT:
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
      localStorage.removeItem("access_token");
      localStorage.removeItem("data");
      return {
        ...state,
        access_token: null,
        isAuthenticated: false,
        loading: false,
        isError: true,
      };
    default:
      return state;
  }
}
