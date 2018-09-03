import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {AdminPage} from "./components/AdminPage.jsx"
import {UserPage} from "./components/UserPage.jsx"
import {ShoppingCart} from "./components/ShopingCart.jsx"
import {MainPage} from "./components/MainPage.jsx"

class App extends Component {
  constructor(){
    super();
    this.state = {
      activePage: 'homepage',
      shop:[
        {item:"MacBook pro 2018"},
        {item:"Dell xs"},
        {item:"Microsoft Surface"},
      ],
      cart:[]
    }
  }

  render() {

    if(this.state.activePage === 'homepage'){
      return <MainPage changePage={this.changePage}/>
    }
    if(this.state.activePage === 'adminpage'){
      return <AdminPage 
              changePage={this.changePage}
              addItemToShop={this.addItemToShop}
              items={this.getShopItems()}/>
    }
    if(this.state.activePage === 'userpage'){
      return <UserPage 
              changePage={this.changePage}
              addItemToCart={this.addItemToCart}
              items={this.getShopItems()}/>
    }
    if(this.state.activePage === 'shopingcart'){
      return <ShoppingCart changePage={this.changePage}/>
    }
  }

  changePage = (page) => {
    this.setState({
      activePage:page,
    })
  }

  addItemToShop = (item) => {
    let newShop = this.state.shop.concat(item)
    console.log(newShop,item)
    this.setState({
      shop: newShop
    })
  }

  addItemToCart = (item) => {
    this.setState({
      cart: item
    })
  }

  getShopItems(){
    return this.state.shop
  }
  getCartItems(){
    return this.state.cart
  }

}





export default App;
