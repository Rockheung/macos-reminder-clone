import React, { Component } from 'react';
import { Form } from 'react-bulma-components/full'

class TextInput extends Component {
  state = {
    focused: false,
    inputValue: ''
  }

  pStyle = {
    "borderColor": "transparent",
    "boxShadow": "none"
  }
  
  onChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  onFocusIn = (e) => {
    this.setState({
      focused: true
    })
  }

  onFocusOut = (e) => {
    // Should update App's state when onBlur
    this.setState({
      focused: false
    })
  }

  render(){
    return (
      <div>
        <Form.Input
          style={ this.state.focused ? {} : this.pStyle }
          onChange={this.onChange}
          onFocus={this.onFocusIn}
          onBlur={this.onFocusOut}
          value={this.state.inputValue}
          placeholder="What U gonna do?"
        />
      </div>
    )
  }
}

export default TextInput