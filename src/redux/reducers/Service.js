import {
  GET_ALL_DRIVERS_SUCCESS,
  GET_ALL_DRIVERS_FAIL,
  GET_ALL_RIDERS_SUCCESS,
  GET_ALL_RIDERS_FAIL,
  GET_USERS_COUNT_SUCCESS,
  GET_USERS_COUNT_FAIL,
  GET_RIDERS_COUNT_SUCCESS,
  GET_RIDERS_COUNT_FAIL,
  GET_TRIPS_COUNT_SUCCESS,
  GET_TRIPS_COUNT_FAIL,
  GET_DRIVERS_COUNT_SUCCESS,
  GET_DRIVERS_COUNT_FAIL,
  GET_ALL_TRIPS_SUCCESS,
  GET_ALL_TRIPS_FAIL,
  RESET_TO_FALSE,
  DELETE_RIDERS_SUCCESS,
  DELETE_RIDERS_FAIL,
  SEARCH_RIDERS_SUCCESS,
  SEARCH_RIDERS_FAIL,
  SEARCH_DRIVERS_SUCCESS,
  SEARCH_DRIVERS_FAIL,
  DELETE_DRIVERS_SUCCESS,
  DELETE_DRIVERS_FAIL,
} from "../actions/Service.js";

const initialState = {
  loading: false,
  data: null,
  allDrivers: [],
  allRiders: [],
  allTrips: [],
  usersCount: [],
  ridersCount: [],
  tripsCount: [],
  driversCount: [],
  searchDriver: [],
  searchRider: []
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RESET_TO_FALSE:
      return {
        ...state,
        loading: false,
      };
      case SEARCH_DRIVERS_SUCCESS:
      return {
        ...state,
        searchDriver: payload,
        loading: true,
      };
      case SEARCH_RIDERS_SUCCESS:
      return {
        ...state,
        searchRider: payload,
        loading: true,
      };
    case GET_RIDERS_COUNT_SUCCESS:
      return {
        ...state,
        ridersCount: payload,
        loading: true,
      };
    case GET_DRIVERS_COUNT_SUCCESS:
      return {
        ...state,
        driversCount: payload,
        loading: true,
      };
    case GET_TRIPS_COUNT_SUCCESS:
      return {
        ...state,
        tripsCount: payload,
        loading: true,
      };
    case GET_USERS_COUNT_SUCCESS:
      return {
        ...state,
        usersCount: payload,
        loading: true,
      };
    case GET_ALL_TRIPS_SUCCESS:
      return {
        ...state,
        allTrips: payload,
        loading: true,
      };
    case GET_ALL_DRIVERS_SUCCESS:
      return {
        ...state,
        allDrivers: payload,
        loading: true,
      };
    case GET_ALL_RIDERS_SUCCESS:
      return {
        ...state,
        allRiders: payload,
        loading: true,
      };
      case SEARCH_RIDERS_FAIL:
      return {
        ...state,
        searchRider: payload,
        loading: true,
      };
      case SEARCH_DRIVERS_FAIL:
      return {
        ...state,
        searchDriver: payload,
        loading: true,
      };
    case GET_RIDERS_COUNT_FAIL:
    case GET_DRIVERS_COUNT_FAIL:
    case GET_TRIPS_COUNT_FAIL:
    case GET_USERS_COUNT_FAIL:
    case GET_ALL_TRIPS_FAIL:
    case GET_ALL_DRIVERS_FAIL:
    case GET_ALL_RIDERS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
