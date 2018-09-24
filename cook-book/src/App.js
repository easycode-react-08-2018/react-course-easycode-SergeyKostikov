import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {loginAction} from './features/actions/login-action'
import {applyMiddleware as dispatch} from "redux";

export class Application extends Component {

  loginAction =() => {
    const {loginAction} = this.props
    dispatch(loginAction({
      user:"seko",
      password: "123456"
    }))
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <button onClick={this.loginAction}>login</button>
        <span>{this.props.key}</span>
      </div>
    );
  }


}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    key: "sdfsf"
  }

}

const mapDispatchToProps = {
  loginAction
}

export const App = connect(mapStateToProps,mapDispatchToProps)(Application)

