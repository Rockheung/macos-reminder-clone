import React, { Component } from 'react'
import TextInput from './TextInput'

import { Columns,
         Section,
         Container,
         Hero,
         Navbar,
         Heading
        } from 'react-bulma-components/full'

// const TodoItem = (props) => {
//   return (
//     <li>{`${props.work}`}</li>
//   )
// }

const TodoItems = (props) => {
  return (
    <ul className="input-field">
      {props.list.map((list,i) => (
        <TextInput
          idx={i}
          key={[list.name,i].join('#')}
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