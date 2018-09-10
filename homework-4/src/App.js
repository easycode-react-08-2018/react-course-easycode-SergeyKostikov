import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import {Link} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import {LoginPage} from "./components/login";
import {RecipeListPage} from "./components/recipes-list";
import {RecipePage} from "./components/recipe";


export class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact  path="/" component={withRouter(LoginPage)}/>
            <Route path="/recipes-list" component={RecipeListPage}/>
            <Route path="/recipe" component={RecipePage}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

