import React, {Component} from "react"
import {Header} from "./header";

export class RecipePage extends Component{
  render(){
    return(
      <div className="login-container">
        <Header/>
        <div className="login-form">
          <div className="login-form-header">
            <h3>welcome</h3>
          </div>
          <div>
            <p>Username <input/></p>
            <p>Password <input type="password"/></p>
          </div>
          <div className="login-form-footer">
            <button>Sign in</button>
            <label><input type="checkbox"/> Remember me</label>
          </div>
        </div>
      </div>
    )
  }
}