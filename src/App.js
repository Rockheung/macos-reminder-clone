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
    focusedIdx: null, // focused todolist index
    theme: [this.props.bulmaTheme] // ["danger","primary",...]
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
    if (workName === '') {
      let newState = {...this.state}
      newState.todolists.splice(idx,1)
      this.setState({...newState})
    } else if (workName !== this.state.todolists[idx].name) {
      console.log(workName)
      let newState = {...this.state}
      newState.todolists[idx].name = workName
      this.setState({...newState})
    }
    // this.forceUpdate()
  }

  addToDoListItem = (listName) => {
    let idx = this.state.focusedIdx;
    if (idx === null) {
      console.log("Hey, your todolist is empty!")
    } else if (listName.length !== 0) {
      let newState = {...this.state};
      let todolistitems ={
        name: listName ? listName : 'new item',
        done: false
      }
      newState.todolists[idx].items.push(todolistitems)
      this.setState({...newState})
    }
    // this.forceUpdate()
  }

  updateToDoListItem = (listName, idx) => {
    let listIdx = this.state.focusedIdx;
    if (listName === '') {
      let newState = {...this.state};
      newState.todolists[listIdx].items.splice(idx,1)
      this.setState({...newState})
    }
    else if (listName !== this.state.todolists[listIdx].items[idx].name) {
      let newState = {...this.state};
      newState.todolists[listIdx].items[idx].name = listName
      this.setState({...newState})
    }
    // this.forceUpdate()
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
        <Hero className={`is-fullheight is-${this.state.theme}`}>
          <Hero.Head>
            <Navbar className="navbar">
              <Container>
                <h1 className="title has-text-centered" >Reminder Clone</h1>
              </Container>
            </Navbar>
          </Hero.Head>
          <Hero.Body style={{WebkitAlignItems:"unset",
                             alignItems:"unset"}}>
            <Container className="is-fullhd">
              <Columns style={{height: "80vh"}}>
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
                  <h2>ToDoListItems: { (this.state.focusedIdx !== null)
                    ? this.state.todolists[this.state.focusedIdx].name
                    : '#'
                    }</h2>
                  <TodoItems
                    list={ (this.state.focusedIdx !== null)
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
