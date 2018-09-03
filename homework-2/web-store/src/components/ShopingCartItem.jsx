import React, { Component } from 'react';

export class ShopingCartItem extends Component {
  render() {
    let {item} = this.props

    return (<li className="list-group-item">
    <img src="#" alt="" />
    <a href="#" className="admin-orders__link">
     {item}
    </a>
    <h2 className="float-right badge-light">✓</h2>
  </li>)
  }
}
