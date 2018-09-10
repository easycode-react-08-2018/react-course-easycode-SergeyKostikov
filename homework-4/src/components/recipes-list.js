import React, {Component} from "react"

import {RecipeListCard} from "./recipe-list-card";
import {SearchForm} from "./search-form";

export class RecipeListPage extends Component{
  render(){
    console.log(this.props)
    return(

      <div className="login-container">
        <SearchForm/>
        <RecipeListCard history={this.props.history}/>
      </div>
    )
  }
}