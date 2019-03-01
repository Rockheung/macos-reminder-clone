import React, { Component } from 'react';
import { Form } from 'react-bulma-components/full'

class TextInput extends Component {
  state = {
    focused: false,
    inputValue: this.props.workName ? this.props.workName : ''
  }

  pStyle = {
    borderColor: "transparent",
    backgroundColor: "transparent",
    boxShadow: "none"
  }

  componentDidMount = () => {
    // console.dir(this.props)
  }
  
  onChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  onFocusIn = (e) => {
    this.props.focusing(this.props.idx)
    this.setState({
      focused: true
    })
  }

  onFocusOut = (e) => {
    // Should update App's state when onBlur
    this.props.savefn(this.state.inputValue, this.props.idx)
    this.setState({
      focused: false
    })
    if (this.props.reset) {
      this.setState({
        inputValue: ''
      })
    }
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
          placeholder="Sth to do"
        />
      </div>
    )
  }
}

export default TextInput