import React, { Component } from 'react'
import { Form } from 'react-bulma-components/full'


class Searchbar extends Component {
  render(){
    return (
      <div style={{ WebkitAlignItems:"flex-end",
                  alignItems:"flex-end"}}>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" placeholder="Search"></input>
            <span className="icon is-small is-left">
              <i className="fas fa-search"></i>
            </span>
          </p>
        </div>
      </div>
    )
  }
}

export default Searchbar