import React, { Component } from 'react';

export class MainPage extends Component{
    render(){ 
      const {changePage} = this.props;

      return (<div className="container">
        <h1>Main Page</h1>
          <div className="row">
            <button className="btn btn-primary" onClick={() => {changePage("adminpage")}}>Login as Admin</button>
            <button className="btn btn-outline-primary" onClick={() => {changePage("userpage")}}>Login as User</button>
          </div>
      </div>)
    }
  }