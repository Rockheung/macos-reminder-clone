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
          key={i}
          workName={list.name}
          savefn={props.updatefn}
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