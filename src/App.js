import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
