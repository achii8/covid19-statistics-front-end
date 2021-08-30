/* eslint-disable no-mixed-spaces-and-tabs */
import { Typography } from "@material-ui/core";
import React, { Suspense } from 'react'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "../App";
import configureStore from "./configure.store";


const { persistor, store } = configureStore();
const loadingMarkup = (
	<div>
	  <h3>Loading..</h3>
	</div>
  )
function ReduxRoot() {
	return (
		<Provider store={store}>
			<PersistGate
				loading={<Typography>Loading...</Typography>}
				persistor={persistor}
			>
				<Suspense fallback={loadingMarkup}>
				<App />
				</Suspense>
			</PersistGate>
		</Provider>
	);
}

export { store };

export default ReduxRoot;
