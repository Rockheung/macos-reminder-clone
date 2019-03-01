import React, { Component } from 'react'
import TextInput from './TextInput'

const TodoItem = (props) => {
  return (
    <li>{`${props.work}`}</li>
  )
}

const TodoItems = (props) => {
  
  return (
    <ul>
      {props.list.map((list,i) => (
        <TextInput
          idx={i}
          key={i}
          workName={list.name}
          savefn={props.updatefn}
          focusing={props.focusing}
        />
      ))}
      <TextInput
        savefn={props.addfn}
        reset
      />
    </ul>
  )
}

export default TodoItems