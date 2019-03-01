import React, { Component } from 'react'

const TodoItem = (props) => {
  return (
    <li>{`todo ${props.work}`}</li>
  )
}

const TodoItems = (props) => {
  
  return (
    <ul>
      {props.list.map((str,i) => (
        <TodoItem key={i} work={str} />
      ))}
    </ul>
  )
}

export default TodoItems