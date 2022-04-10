import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './styles/bootstrap.min.css'
import './styles/scss/style.scss'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import SimpleReactLightbox from 'simple-react-lightbox'

import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

const persistor = persistStore(store)

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<SimpleReactLightbox>
				<App />
			</SimpleReactLightbox>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
)
