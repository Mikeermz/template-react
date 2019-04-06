/* eslint-disable */
import React, { Component } from 'react';

// Styles
import { ListGroup, ListGroupItem } from 'reactstrap';

// import PropTypes from 'prop-types';
// Components

class ListTodo extends Component {
  render() {
    return (
    <ListGroup>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
    );
  }
}

export default ListTodo;
