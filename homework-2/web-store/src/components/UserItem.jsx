import React, { Component } from "react";

export class UserItem extends Component {
  render() {
    let { item } = this.props;
    let {addItemToCart} = this.props;
    return (
        //btn-light
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{item}</h5>
          <p className="card-text">{item}</p>
          <button className="btn btn-primary" onClick={() => {addItemToCart({itemName:item})}}>

            Buy {item}
          </button>
          <h3 className="text-success" >✓✓✓✓✓</h3>
        </div>
      </div>
    );
  }
}
