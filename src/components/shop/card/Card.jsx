import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Card extends Component {
  state = {
    mainImage: "orange1.jpg",
    colorChoice: "orange",
  };
  render() {
    return (
      <Link to="/product-detail/cloths" style={{ textDecoration: "none" }}>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <img
            src={`images/${this.state.mainImage}`}
            alt=""
            className="shopImageMain"
          />
          <h2 className="product_name_shop">Product name</h2>
          <h4 className="product_name2_shop">Preview FW20</h4>
          <div>
            <div className="inline text-center text-light">
              <div onClick={() => {this.setState({mainImage : 'green1.jpg'})}}>
                <img src="/images/green1.jpg" height="100px" width="100px" />
                <br />
                Military Green
              </div>
            </div>
            <div className="inline text-center text-light">
              <div onClick={() => {this.setState({mainImage : 'orange1.jpg'})}}>
                <img src="/images/orange1.jpg" height="100px" width="100px" />
                <br />
                Orange
              </div>
            </div>
          </div>
          <ul className="shopul">
            <li className="not">1</li>
            <li className="not">2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li className="not">6</li>
          </ul>
          <h3 className="shop_price">EUR 715,00</h3>
        </div>
      </Link>
    );
  }
}
