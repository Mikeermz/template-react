/* eslint-disable */
import React, { Component } from 'react';

// Styles

// import PropTypes from 'prop-types';
// Components
import ListTodo from '../global/list';

class ListNoComplete extends Component {
  render() {
    return (
      <div >
        <ListTodo items="tasks-incompleted"/>
      </div>
    );
  }
}

export default ListNoComplete;
