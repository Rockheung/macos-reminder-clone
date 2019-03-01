import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns } from 'react-bulma-components/full'

import TodoItems from './TodoItems'
import TextInput from './TextInput'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      works: [
        "One",
        "Two",
        "Three",
        "Four"
      ]
    }
  }
  render() {
    return (
      <div>
        <Columns>
          <Columns.Column size="two-thirds">
            <TodoItems list={this.state.works} />
          </Columns.Column>
          <Columns.Column>
            <TextInput />
          </Columns.Column>
        </Columns>
      </div>
    );
  }
}

export default App;
