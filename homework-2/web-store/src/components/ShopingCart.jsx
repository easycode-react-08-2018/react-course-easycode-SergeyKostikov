import React, { Component } from 'react';
import {ShopingCartItem} from "./ShopingCartItem.jsx"


export class ShoppingCart extends Component {
  render() {

    const {changePage} = this.props;
    const {items} = this.props;

    return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h1>Shopping Cart</h1>
          <ul className="list-group">
            
          {items.map(elem => {
            console.log(elem.itemName);
              <ShopingCartItem key={elem.itemName} item={elem.itemName}/>
            })
          }
          </ul>
        </div>
        <div className="col-4">
          <div>User</div>
          <button onClick={() => {changePage("homepage")}}>User Logout</button>
        </div>
      </div>
      <div className="row">
        <pre>price:</pre>
      </div>
      <div className="row">
        <button className="btn btn-primary" >Ship it</button>
      </div>
    </div>)
  }
}
