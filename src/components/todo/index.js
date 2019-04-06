/* eslint-disable */
import React, { Component } from 'react';

// Styles

// import PropTypes from 'prop-types';
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
      <ListTodo/>
      </div>
    );
  }
}

export default Todo;
