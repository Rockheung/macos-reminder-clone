import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns,
         Section,
         Container,
         Hero,
         Navbar,
         Heading
        } from 'react-bulma-components/full'

import TodoItems from './TodoItems'

class App extends Component {
  // state = this.props.init;
  state = {
    todolists: [], // [todolist]
    focusedIdx: -1 // focused todolist index
  }

  addToDoList = (workName) => {
    const todolist = {
      name: workName ? workName : 'new list',
      items: [] // [todolistitems]
    }
    if (workName.length !==0) {
      this.setState({
        todolists: [...this.state.todolists, todolist],
        focusedIdx: this.state.todolists.length
      })
    }
  }

  updateToDoList = () => {

  }

  addToDoListItem = () => {
    const todolistitems ={
      name: 'new item',
      done: false
    }
  }

  render() {
    return (
      <div>
        <Hero className="is-fullheight">
          <Hero.Head>
            <Navbar>
              <Heading>Reminder Clone</Heading>
            </Navbar>
          </Hero.Head>
          <Hero.Body style={{WebkitAlignItems:"unset",
                             alignItems:"unset"}}>
            <Container className="is-fullhd">
              <Columns>
                <Columns.Column size="one-quarter">
                  <p>ToDoLists</p>
                  <TodoItems
                    list={this.state.todolists}
                    addfn={this.addToDoList}
                    updatefn={()=>{}}
                  />
                </Columns.Column>
                <Columns.Column>
                  <h2>ToDoListItems</h2>
                </Columns.Column>
              </Columns>
            </Container>
          </Hero.Body>
        </Hero>
      </div>
    );
  }
}

export default App;
