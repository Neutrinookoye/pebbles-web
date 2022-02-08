import axios from "axios";

export const GET_ALL_DRIVERS_SUCCESS = "GET_ALL_DRIVERS_SUCCESS";
export const GET_ALL_DRIVERS_FAIL = "GET_ALL_DRIVERS_FAIL";

export const DELETE_RIDERS_SUCCESS = "DELETE_RIDERS_SUCCESS";
export const DELETE_RIDERS_FAIL = "DELETE_RIDERS_FAIL";

export const SEARCH_RIDERS_SUCCESS = "SEARCH_RIDERS_SUCCESS";
export const SEARCH_RIDERS_FAIL = "SEARCH_RIDERS_FAIL";

export const SEARCH_DRIVERS_SUCCESS = "SEARCH_DRIVERS_SUCCESS";
export const SEARCH_DRIVERS_FAIL = "SEARCH_DRIVERS_FAIL";

export const DELETE_DRIVERS_SUCCESS = "DELETE_DRIVERS_SUCCESS";
export const DELETE_DRIVERS_FAIL = "DELETE_DRIVERS_FAIL";

export const ACTIVATE_DRIVER_SUCCESS = "ACTIVATE_DRIVER_SUCCESS";
export const ACTIVATE_DRIVER_FAIL = "ACTIVATE_DRIVER_FAIL";

export const GET_ALL_RIDERS_SUCCESS = "GET_ALL_RIDERS_SUCCESS";
export const GET_ALL_RIDERS_FAIL = "GET_ALL_RIDERS_FAIL";

export const GET_USERS_COUNT_SUCCESS = "GET_USERS_COUNT_SUCCESS";
export const GET_USERS_COUNT_FAIL = "GET_USERS_COUNT_FAIL";

export const GET_RIDERS_COUNT_SUCCESS = "GET_RIDERS_COUNT_SUCCESS";
export const GET_RIDERS_COUNT_FAIL = "GET_RIDERS_COUNT_FAIL";

export const GET_TRIPS_COUNT_SUCCESS = "GET_TRIPS_COUNT_SUCCESS";
export const GET_TRIPS_COUNT_FAIL = "GET_TRIPS_COUNT_FAIL";

export const GET_DRIVERS_COUNT_SUCCESS = "GET_DRIVERS_COUNT_SUCCESS";
export const GET_DRIVERS_COUNT_FAIL = "GET_DRIVERS_COUNT_FAIL";

export const GET_ALL_TRIPS_SUCCESS = "GET_ALL_TRIPS_SUCCESS";
export const GET_ALL_TRIPS_FAIL = "GET_ALL_TRIPS_FAIL";

export const LOGIN_LOADING = "LOGIN_LOADING";

export const RESET_TO_FALSE = "RESET_TO_FALSE";

// export const resetAllToFalse = () => (dispatch) => {
//   dispatch({
//     type: RESET_TO_FALSE,
//   });
// };

// // activateDriver
// export const activateDriver = (id) => async (dispatch) => {
//   const token = localStorage.getItem("access_token");

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   try {
//     const res = await axios.get(
//       `https://sirbanks.herokuapp.com/api/v1/admin/drivers/${id}/verification`,
//       config
//     );
//     dispatch({
//       type: ACTIVATE_DRIVER_SUCCESS,
//       payload: res?.data,
//     });
//     console.log("ACTIVATE_DRIVER_SUCCESS", res?.data);
//     getAllDrivers()
//   } catch (error) {
//     let payload = error.response.data.message;
//     console.log("ACTIVATE_DRIVER_FAIL", error.response.data.message);
//     dispatch({
//       type: ACTIVATE_DRIVER_FAIL,
//       payload,
//     });
//     return error;
//   }
// };

// // getAllTrips
// export const getAllTrips = () => async (dispatch) => {
//   const token = localStorage.getItem("access_token");

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   try {
//     const res = await axios.get(
//       "https://sirbanks.herokuapp.com/api/v1/trips",
//       config
//     );
//     dispatch({
//       type: GET_ALL_TRIPS_SUCCESS,
//       payload: res?.data,
//     });
//     console.log("GET_ALL_TRIPS_SUCCESS", res?.data);
//   } catch (error) {
//     console.log("GET_ALL_TRIPS_FAIL", error.response);
//     // let payload = error.response.data.message;
//     // console.log("GET_ALL_TRIPS_FAIL", error.response.data.message);
//     dispatch({
//       type: GET_ALL_TRIPS_FAIL,
//       // payload,
//     });
//     return error;
//   }
// };

// // getAllDrivers
// export const getAllDrivers = () => async (dispatch) => {
//   const token = localStorage.getItem("access_token");

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   try {
//     const res = await axios.get(
//       "https://sirbanks.herokuapp.com/api/v1/admin/drivers",
//       config
//     );
//     dispatch({
//       type: GET_ALL_DRIVERS_SUCCESS,
//       payload: res?.data,
//     });
//     console.log("GET_ALL_DRIVERS_SUCCESS", res?.data);
//   } catch (error) {
//     console.log("GET_ALL_DRIVERS_FAIL", error.response);
//     // let payload = error.response.data.message;
//     // console.log("GET_ALL_DRIVERS_FAIL", error.response.data.message);
//     dispatch({
//       type: GET_ALL_DRIVERS_FAIL,
//       // payload,
//     });
//     return error;
//   }
// };

// // getAllDrivers
// export const getAllRiders = () => async (dispatch) => {
//   const token = localStorage.getItem("access_token");

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   try {
//     const res = await axios.get(
//       "https://sirbanks.herokuapp.com/api/v1/admin/riders",
//       config
//     );
//     dispatch({
//       type: GET_ALL_RIDERS_SUCCESS,
//       payload: res?.data,
//     });
//     console.log("GET_ALL_RIDERS_SUCCESS", res?.data);
//   } catch (error) {
//     console.log("GET_ALL_RIDERS_FAIL", error.response);
//     // let payload = error.response.data.message;
//     // console.log("GET_ALL_RIDERS_FAIL", error.response.data.message);
//     dispatch({
//       type: GET_ALL_RIDERS_FAIL,
//       // payload,
//     });
//     return error;
//   }
// };

// // getUsersCount
// export const getUsersCount = () => async (dispatch) => {
  
//   const token = localStorage.getItem("access_token");

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   try {
//     const res = await axios.get(
//       "https://sirbanks.herokuapp.com/api/v1/users/count",
//       config
//     );
//     dispatch({
//       type: GET_USERS_COUNT_SUCCESS,
//       payload: res?.data,
//     });
//     console.log("GET_USERS_COUNT_SUCCESS", res?.data);
//   } catch (error) {
//     let payload = error.response.data.message;
//     console.log("GET_USERS_COUNT_FAIL", error.response.data.message);
//     dispatch({
//       type: GET_USERS_COUNT_FAIL,
//       payload,
//     });
//     return error;
//   }
// };

// // getUsersCount
// export const getRidersCount = () => async (dispatch) => {
  
//   const token = localStorage.getItem("access_token");

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   try {
//     const res = await axios.get(
//       "https://sirbanks.herokuapp.com/api/v1/users/count",
//       config
//     );
//     dispatch({
//       type: GET_RIDERS_COUNT_SUCCESS,
//       payload: res?.data,
//     });
//     console.log("GET_RIDERS_COUNT_SUCCESS", res?.data);
//   } catch (error) {
//     let payload = error.response.data.message;
//     console.log("GET_RIDERS_COUNT_FAIL", error.response.data.message);
//     dispatch({
//       type: GET_RIDERS_COUNT_FAIL,
//       payload,
//     });
//     return error;
//   }
// };

// // getTripsCount
// export const getTripsCount = () => async (dispatch) => {
  
//   const token = localStorage.getItem("access_token");

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   try {
//     const res = await axios.get(
//       "https://sirbanks.herokuapp.com/api/v1/trips/count",
//       config
//     );
//     dispatch({
//       type: GET_TRIPS_COUNT_SUCCESS,
//       payload: res?.data,
//     });
//     console.log("GET_TRIPS_COUNT_SUCCESS", res?.data);
//   } catch (error) {
//     let payload = error.response.data.message;
//     console.log("GET_TRIPS_COUNT_FAIL", error.response.data.message);
//     dispatch({
//       type: GET_TRIPS_COUNT_FAIL,
//       payload,
//     });
//     return error;
//   }
// };

// // getDriversCount
// export const getDriversCount = () => async (dispatch) => {
  
//   const token = localStorage.getItem("access_token");

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   try {
//     const res = await axios.get(
//       "https://sirbanks.herokuapp.com/api/v1/drivers/count/",
//       config
//     );
//     dispatch({
//       type: GET_DRIVERS_COUNT_SUCCESS,
//       payload: res?.data,
//     });
//     console.log("GET_DRIVERS_COUNT_SUCCESS", res?.data);
//   } catch (error) {
//     let payload = error.response.data.message;
//     console.log("GET_DRIVERS_COUNT_FAIL", error.response.data.message);
//     dispatch({
//       type: GET_DRIVERS_COUNT_FAIL,
//       payload,
//     });
//     return error;
//   }
// };

// // deleteDriver
// export const deleteDriver = (id) => async (dispatch) => {
  
//   const token = localStorage.getItem("access_token");

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   try {
//     const res = await axios.delete(
//       `https://sirbanks.herokuapp.com/api/v1/users/drivers/${id}`,
//       config
//     );
//     dispatch({
//       type: DELETE_DRIVERS_SUCCESS,
//       payload: res?.data,
//     });
//     console.log("DELETE_DRIVERS_SUCCESS", res?.data);
//     getAllDrivers()
//   } catch (error) {
//     let payload = error.response.data.message;
//     console.log("DELETE_DRIVERS_FAIL", error.response.data.message);
//     dispatch({
//       type: DELETE_DRIVERS_FAIL,
//       payload,
//     });
//     return error;
//   }
// };

// // deleteRider
// export const deleteRider = (id) => async (dispatch) => {
  
//   const token = localStorage.getItem("access_token");

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   try {
//     const res = await axios.delete(
//       `https://sirbanks.herokuapp.com/api/v1/users/riders/${id}`,
//       config
//     );
//     dispatch({
//       type: DELETE_RIDERS_SUCCESS,
//       payload: res?.data,
//     });
//     console.log("DELETE_RIDERS_SUCCESS", res?.data);
//     getAllRiders()
//   } catch (error) {
//     let payload = error.response.data.message;
//     console.log("DELETE_RIDERS_FAIL", error.response.data.message);
//     dispatch({
//       type: DELETE_RIDERS_FAIL,
//       payload,
//     });
//     return error;
//   }
// };

// // searchDriver
// export const searchDriver = (query) => async (dispatch) => {
  
//   const token = localStorage.getItem("access_token");

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   try {
//     const res = await axios.get(
//       `https://sirbanks.herokuapp.com/api/v1/admin/drivers/search?query=${query}`,
//       config
//     );
//     dispatch({
//       type: SEARCH_DRIVERS_SUCCESS,
//       payload: res?.data,
//     });
//     console.log("SEARCH_DRIVERS_SUCCESS", res?.data);
//   } catch (error) {
//     let payload = error.response.data.message;
//     console.log("SEARCH_DRIVERS_FAIL", error.response.data.message);
//     dispatch({
//       type: SEARCH_DRIVERS_FAIL,
//       payload,
//     });
//     return error;
//   }
// };

// // searchDriver
// export const searchRider = (query) => async (dispatch) => {
  
//   const token = localStorage.getItem("access_token");

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   try {
//     const res = await axios.get(
//       `https://sirbanks.herokuapp.com/api/v1/admin/riders/search?query=${query}`,
//       config
//     );
//     dispatch({
//       type: SEARCH_RIDERS_SUCCESS,
//       payload: res?.data,
//     });
//     console.log("SEARCH_RIDERS_SUCCESS", res?.data);
//   } catch (error) {
//     let payload = error.response.data.message;
//     console.log("SEARCH_RIDERS_FAIL", error.response.data.message);
//     dispatch({
//       type: SEARCH_RIDERS_FAIL,
//       payload,
//     });
//     return error;
//   }
// };