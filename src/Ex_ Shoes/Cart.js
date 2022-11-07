import React, { Component } from "react";

export default class Cart extends Component {
  calcTotalAmount = () => {
    return this.props.cart.reduce((total, item) => {
      return total + item.quantity * item.product.price;
    }, 0);
  };
  render() {
    document.getElementsByTagName("body")[0].style.overflow = "hiden";
    return (
      <div
        className="position-fixed w-100 h-100 left-0 top-0"
        style={{
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
      >
        <div
          className="w-75 bg-white position-absolute p-5"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <button
            onClick={this.props.hideCart}
            className="btn btn-dark position-absolute"
            style={{
              top: 20,
              right: 20,
            }}
          >
            X
          </button>
          <h1 className="text-center fs-3">Cart</h1>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Unite Price</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((item) => {
                return (
                  <tr key={item.product.id}>
                    <td>{item.product.id}</td>
                    <td>{item.product.name}</td>
                    <td>
                      <img
                        style={{
                          width: 100,
                        }}
                        src={item.product.image}
                        alt=""
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.quantityChange(item.product.id, -1);
                        }}
                        className="btn btn-info"
                      >
                        -
                      </button>
                      <span className="mx-2 fs-4">{item.quantity}</span>
                      <button
                        onClick={() => {
                          this.props.quantityChange(item.product.id, 1);
                        }}
                        className="btn btn-info"
                      >
                        +
                      </button>
                    </td>
                    <td>{item.product.price}</td>
                    <td>{item.product.price * item.quantity}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.removeCartItem(item.product.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={6} className="text-end">
                  Total : {this.calcTotalAmount()}
                </td>
                <td>
                  <button
                    onClick={this.props.checkOut}
                    className="btn btn-success "
                  >
                    CheckOut
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
