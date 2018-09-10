import React,{Component} from "react"
import {withRouter} from "react-router-dom"
import {RecipePage} from "./recipe";

export class RecipeListCard extends Component{
  render(){
    console.log(this.props)
    return(
      <div>
        <img src=""/>
        <div>
          <h4>title</h4>
          <p>1. inner</p>
          <p>1. inner</p>
          <p>1. inner</p>
        </div>
        <div>
          <button onClick={() => {this.props.history.push("recipe")}}>edit</button>
          <button>delete</button>
        </div>
      </div>
    )
  }
}