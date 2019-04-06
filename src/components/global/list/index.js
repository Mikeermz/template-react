/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Styles
import { ListGroup, ListGroupItem } from 'reactstrap';

// import PropTypes from 'prop-types';
// Api
import api from '../../../api'

class ListTodo extends Component {
  static Proptypes = {
    items: PropTypes.string.isRequired
  }
  componentDidMount() {
    const  { items }  = this.props
    console.log(items)
    api.get(`/${items}`).then((response) =>{
      console.log(response.data)
    }).catch((error) => console.log(error));
  }
  render() {
    const  { items }  = this.props
    console.log(items)
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
