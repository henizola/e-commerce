import React, { Component } from "react";
import "./Hero.css";
import {Link} from "react-router-dom";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero_section">
        <video autoPlay loop muted className="hero_section_video">
          <source src="video/video-bg.mp4" />
        </video>
        <div className="hero_content">
            <h1>8</h1> 
            <br />
            <h1> MONCLER </h1>
            <br />
            <h3>RICHARD QUINN</h3>
            <br />
            <Link to="/shop" className="btn btn-primary st_btn_primary mt-4"> Get It Before It's Gone </Link>
        </div>
      </div>
    );
  }
}
