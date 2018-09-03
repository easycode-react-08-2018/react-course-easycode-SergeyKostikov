import React, { Component } from 'react';

export class AdminItem extends Component {
  render() {
    let {item} = this.props
    return <li className="list-group-item">
         <img src="#" alt="" />
          <a href="#" className="admin-orders__link">
               {item}
          </a>
         <h2 className="float-right btn-link">✎</h2>
     </li>

  }
}
