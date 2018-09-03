import React, { Component } from 'react';

import {AdminItem} from "./AdminItem.jsx"


export class AdminPage extends Component {
  render() {
    const {changePage} = this.props
    const {addItemToShop} = this.props
    
    const {items} = this.props

    return(
    <div className="container flex-grow-1">
      <div className="row">
        <div className="col-8">
          <div className="admin-orders">
            <h1>ADMIN PAGE</h1>
            <ul className="list-group">
              {
                items.map(elem => <AdminItem item={elem.item}/>)
              }
            </ul>
            <br />
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="enter new name"
              />
              <button className="btn btn-primary" onClick={() => {addItemToShop({item:"new Item"})}}>Add</button>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div>Admin</div>
          <button onClick={() => {changePage("homepage")}}>User Logout</button>
          <button onClick={() => {changePage("shopingcart")}}>Shoping Cart</button>
        </div>
      </div>
    </div>)
  }
}
