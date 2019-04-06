/* eslint-disable */
import React, { Component } from 'react';

// Styles

// import PropTypes from 'prop-types';
// Components
import ListTodo from '../global/list';

class ListComplete extends Component {
  render() {
    return (
      <div >
        <ListTodo items="tasks-completed"/>
      </div>
    );
  }
}

export default ListComplete;
