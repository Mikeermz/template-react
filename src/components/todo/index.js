/* eslint-disable */
import React, { Component } from 'react';
// Components
import ListTodo from '../global/list';
import ButtonTodo from '../global/button';
import InputTodo from '../global/input/';

class Todo extends Component {
  render() {
    return (
      <div >
      <InputTodo/>
      <ButtonTodo/>
      <ListTodo items="tasks"/>
      </div>
    );
  }
}

export default Todo;
