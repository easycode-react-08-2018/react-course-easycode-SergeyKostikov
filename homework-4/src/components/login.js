import React, {Component} from "react"
import {Header} from "./header";
import {withRouter} from "react-router-dom"

export class LoginPage extends Component{

  render(){
    console.log(this.props)
    return(
      <div className="login-container">

        <div className="login-form">
          <div className="login-form-header">
            <h3>welcome</h3>
          </div>
          <div>
            <p>Username <input/></p>
            <p>Password <input type="password"/></p>
          </div>
          <div className="login-form-footer">
            <button onClick={() => {this.props.history.push("recipes-list")}}>Sign in</button>
            <label><input type="checkbox"/> Remember me</label>
          </div>
        </div>
      </div>
    )
  }
}