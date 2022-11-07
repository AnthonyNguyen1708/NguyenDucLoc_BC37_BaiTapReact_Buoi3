import React, { Component } from "react";
import Cart from "./Cart";
import ShoeDetail from "./ShoeDetail";
import ShoeItem from "./ShoeItem";
import styles from "./ShoeList.module.css";

export default class ShoeList extends Component {
  shoeData = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];

  state = { selectedItem: null, isShowCart: false, cart: [] };

  setSelectedItem = (dataFromItem) => {
    this.setState({ selectedItem: dataFromItem });
  };

  renderItemShoe = () => {
    const html = this.shoeData.map((item) => {
      return (
        <div key={item.id} className={styles.card}>
          <ShoeItem
            addToCart={this.addToCart}
            setSelectedItem={this.setSelectedItem}
            item={item}
          />
        </div>
      );
    });
    return html;
  };

  showCart = () => {
    this.setState({
      isShowCart: true,
    });
  };
  hideCart = () => {
    this.setState({
      isShowCart: false,
    });
  };

  addToCart = (shoe) => {
    const cloneCart = [...this.state.cart];
    const foundItem = cloneCart.find((item) => shoe.id === item.product.id);
    const carItem = {
      product: shoe,
      quantity: 1,
    };

    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      cloneCart.push(carItem);
    }

    this.setState(
      {
        cart: cloneCart,
      },
      () => {
        console.log(this.state.cart);
      }
    );
  };

  toTalCartItem = () => {
    return this.state.cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };

  quantityChange = (id, status) => {
    const cloneCart = [...this.state.cart];
    const foundItem = cloneCart.find((item) => id === item.product.id);
    const itemIndex = cloneCart.findIndex((item) => id === item.product.id);

    if (foundItem.quantity < 1) {
      cloneCart.splice(itemIndex, 1);
    } else {
      foundItem.quantity += status;
    }

    this.setState(
      {
        cart: cloneCart,
      },
      () => {
        console.log(this.state.cart);
      }
    );
  };

  removeCartItem = (id) => {
    const cloneCart = [...this.state.cart];
    const itemIndex = cloneCart.findIndex((item) => id === item.product.id);

    cloneCart.splice(itemIndex, 1);

    this.setState(
      {
        cart: cloneCart,
      },
      () => {
        console.log(this.state.cart);
      }
    );
  };

  checkOut = () => {
    const cloneCart = [...this.state.cart];

    if (cloneCart.length !== 0) {
      cloneCart.length = 0;

      this.setState({
        cart: cloneCart,
        isShowCart: false,
      });
    } else {
      return;
    }
  };

  render() {
    return (
      <div>
        <h3
          onClick={this.showCart}
          className="text-end pe-5"
          style={{
            cursor: "pointer",
          }}
        >
          Giỏ hàng ({this.toTalCartItem()})
        </h3>
        <div className={styles.row}>{this.renderItemShoe()}</div>
        <div style={{ padding: "0 40px" }}>
          {this.state.selectedItem ? (
            <ShoeDetail selectedItem={this.state.selectedItem} />
          ) : null}
        </div>
        {this.state.isShowCart && (
          <Cart
            checkOut={this.checkOut}
            removeCartItem={this.removeCartItem}
            quantityChange={this.quantityChange}
            cart={this.state.cart}
            hideCart={this.hideCart}
          />
        )}
      </div>
    );
  }
}
