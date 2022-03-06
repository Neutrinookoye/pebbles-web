import { combineReducers } from 'redux'

import { authReducer } from './authReducer'
import {
	userRegisterReducer,
	userLoginReducer,
	getUserProfileReducer,
} from './userReducer'

const reducer = combineReducers({
	auth: authReducer,

	userRegister: userRegisterReducer,
	userLogin: userLoginReducer,
	getUserProfile: getUserProfileReducer,
})

export default reducer
