import React, { Component } from 'react';
import { Form } from 'react-bulma-components/full'

class TextInput extends Component {
  state = {
    focused: false,
    inputValue: this.props.workName ? this.props.workName : '',
    done: false
  }

  pStyle = {
    borderColor: "transparent",
    backgroundColor: "transparent",
    boxShadow: "none"
  }

  doneStyle = {
    fontStyle: "italic",
    textDecorationLine: "line-through",
    fontWeight: "100"
  }

  componentDidMount = () => {
    // console.dir(this.props)
  }
  
  onChange = (e) => {
    if (!this.state.done) {
      this.setState({
        inputValue: e.target.value
      })
    }
  }

  onFocusIn = (e) => {
    if (this.props.focusing) {
      this.props.focusing(this.props.idx)
    }
    if (!this.state.done) {
      this.setState({
        focused: true
      })
    }
  }

  onDoubleClick = () => {
    this.setState({
      done: !this.state.done
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

  setStyle = () => {
    let s = {}
    if (this.state.done && !this.props.reset) {
      Object.assign(s, this.doneStyle)
    }
    if (!this.state.focused) {
      Object.assign(s, this.pStyle)
    }
    return s
  }

  render(){
    return (
      <div>
        <Form.Input
          className={this.state.focused ? "has-background-white-ter" : ""}
          style={this.setStyle()}
          onChange={this.onChange}
          onFocus={this.onFocusIn}
          onBlur={this.onFocusOut}
          onDoubleClick={this.onDoubleClick}
          value={this.state.inputValue}
          placeholder="Add one ..."
        />
      </div>
    )
  }
}

export default TextInput


/**/

          