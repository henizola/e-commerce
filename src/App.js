import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "jquery/dist/jquery";
import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/templates/footer/Footer";
import MainNavbar from "./components/templates/navbar/Navbar";
import Routes from "./Routes";

function App() {
	const location = useLocation();

	return (
		<div>
			{!location.pathname.includes("admin") && <MainNavbar />}
			<div className='App'>
				<Routes />
			</div>
			{!location.pathname.includes("admin") && <Footer />}
		</div>
	);
}

export default App;
