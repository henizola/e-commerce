import React, { Component } from "react";

export default class CardList extends Component {
  render() {
    return (
      <div className="home_card_section py-5 ">
        <div className="container">
          <div className="row">
              {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
