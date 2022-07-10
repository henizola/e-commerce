import React, { Component } from "react";
import "./Shop.css";
import Card from "../../components/shop/card/Card";
class Shop extends Component {
  constructor() {
    super();
      (this.state = {
        items: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      });
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {this.state.items.map((item) => (
              <div className="col-4" key={item.id}>
                {/* card */}
                <Card />
                {/* card */}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
