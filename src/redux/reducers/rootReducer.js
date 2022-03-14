import { combineReducers } from 'redux'
import {
	createApartmentReducer,
	getUserApartmentReducer,
} from './apartmentReducer'

import {
	userRegisterReducer,
	userLoginReducer,
	getUserProfileReducer,
} from './userReducer'

const reducer = combineReducers({
	userRegister: userRegisterReducer,
	userLogin: userLoginReducer,
	getUserProfile: getUserProfileReducer,

	createApartment: createApartmentReducer,
	getUserApartment: getUserApartmentReducer,
})

export default reducer
