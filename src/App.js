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
    if (workName.length !== 0) {
      let todolist = {
        name: workName ? workName : 'new list',
        items: [] // [todolistitems]
      }
      this.setState({
        todolists: [...this.state.todolists, todolist],
        focusedIdx: this.state.todolists.length
      })
    }
  }

  updateToDoList = (workName, idx) => {
    // this.changeFocusing(idx);
    if (workName !== this.state.todolists[idx].name) {
      let newState = {...this.state}
      newState.todolists[idx].name = workName
      this.setState({...newState})
    }
  }

  addToDoListItem = (listName) => {
    let idx = this.state.focusedIdx;
    if (idx < 0) {
      alert("Hey, your todolist is empty!")
    } else if (listName.length !== 0) {
      let newState = {...this.state};
      let todolistitems ={
        name: listName ? listName : 'new item',
        done: false
      }
      newState.todolists[idx].items.push(todolistitems)
      this.setState({...newState})
    }
  }

  updateToDoListItem = (listName, idx) => {
    let listIdx = this.state.focusedIdx;
    if (listName !== this.state.todolists[listIdx].items[idx].name) {
      let newState = {...this.state};
      newState.todolists[listIdx].items[idx].name = listName
      this.setState({...newState})
    }
  }

  changeFocusing = (idx) => {
    let newState = {...this.state}
    newState.focusedIdx = idx;
    console.log(this.state.todolists[idx])
    this.setState({...newState})
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
                    focusing={this.changeFocusing}
                    addfn={this.addToDoList}
                    updatefn={this.updateToDoList}
                  />
                </Columns.Column>
                <Columns.Column>
                  <h2>ToDoListItems</h2>
                  <TodoItems
                    list={ (this.state.focusedIdx>-1)
                          ? this.state.todolists[this.state.focusedIdx].items
                          : [] }
                    addfn={this.addToDoListItem}
                    updatefn={this.updateToDoListItem}
                  />
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
