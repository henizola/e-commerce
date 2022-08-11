import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./custom-styles.css";
import configureStore from "./store/store";

// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
//...

const store = configureStore();
// let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				{/* <PersistGate persistor={persistor}> */}
				<App />
				{/* </PersistGate> */}
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
