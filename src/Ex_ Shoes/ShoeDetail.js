import React, { Component } from "react";

export default class ShoeDetail extends Component {
  render() {
    const { name, price, description, image } = this.props.selectedItem;
    return (
      <div>
        <div style={{ border: "1px solid red", padding: "0 15px" }}>
          <h3>Name: {name}</h3>
          <img src={image} alt="" />
          <h3>Price: {price}</h3>
          <h3>Describe: {description}</h3>
          <h3>Quantity: </h3>
        </div>
      </div>
    );
  }
}
