import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './store';
import * as serviceWorker from './serviceWorkerRegistration';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
// import swConfig from './swConfig';
import { initializeFirebase } from './firebase';
// import swDev from './swDev';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate persistor={persistor}>
					<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

initializeFirebase();
serviceWorker.register();
