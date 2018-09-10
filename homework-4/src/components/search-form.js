import React, {Component} from "react"

export class SearchForm extends Component{
  render(){
    return(
      <div>
        <p>
          <input type="text"/>
          <button>Search</button>
          <button>new</button>
        </p>
      </div>
    )
  }
}