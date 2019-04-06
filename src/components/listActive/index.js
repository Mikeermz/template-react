/* eslint-disable */
import React, { Component } from 'react';

// Styles

// import PropTypes from 'prop-types';
// Components
import ListTodo from '../global/list';

class ListActive extends Component {
  render() {
    return (
      <div >
        <ListTodo items="tasks-active"/>
      </div>
    );
  }
}

export default ListActive;
