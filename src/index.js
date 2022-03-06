import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./components/fontawesomeicon/FontAwesomeTcon";
import App from './App'
import { Provider } from 'react-redux'
// import store from './redux/store'
import configureStore from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

const persistor = persistStore(store)

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
)
