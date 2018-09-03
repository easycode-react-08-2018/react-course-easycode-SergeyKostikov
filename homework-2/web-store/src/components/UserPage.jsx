import React, { Component } from "react";
import { UserItem } from "./UserItem.jsx";

export class UserPage extends Component {
  render() {
    const { changePage } = this.props;
    const { addItemToCart } = this.props;
    const { items } = this.props;
    return (
      <div className="container">
        <h1>USER PAGE</h1>
        <div className="row">
          <div className="col-8">
            <div className="row">
              {items.map(elem => (
                <UserItem key={elem.item} item={elem.item} addItemToCart={addItemToCart}/>
              ))}
            </div>
          </div>
          <div className="col-4">
            <div>User</div>
            <button
              onClick={() => {
                changePage("homepage");
              }}
            >
              User Logout
            </button>
            <button
              onClick={() => {
                changePage("shopingcart");
              }}
            >
              Shoping Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
