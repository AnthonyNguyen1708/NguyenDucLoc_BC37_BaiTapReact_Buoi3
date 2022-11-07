import React, { Component } from "react";
import styles from "./ShoeItem.module.css";

export default class ShoeItem extends Component {
  render() {
    const { name, price, image } = this.props.item;
    return (
      <div className={styles.item}>
        <img className={styles.img} src={image} alt="" />
        <div className={styles.cardContent}>
          <h5>{name}</h5>
          <p>{price}</p>
          <span>
            <button
              onClick={() => this.props.setSelectedItem(this.props.item)}
              className={styles.btn}
            >
              Show Detail
            </button>
            <button
              onClick={() => {
                this.props.addToCart(this.props.item);
              }}
              className={styles.btn}
            >
              Add to cart
            </button>
          </span>
        </div>
      </div>
    );
  }
}
