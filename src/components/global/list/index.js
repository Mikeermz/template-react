/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Styles
import { ListGroup, ListGroupItem } from 'reactstrap';

// import PropTypes from 'prop-types';
// Api
import api from '../../../api'

class ListTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }
  static Proptypes = {
    items: PropTypes.string.isRequired
  }

  apiCallGet = () =>{
    const  { items }  = this.props
    api.get(`/${items}`).then((response) =>{
      this.setState({
        items: response.data
      })
    }).catch((error) => console.log(error));
  }
  componentDidMount() {
    this.apiCallGet();
  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.apiCallGet();
  }

  render() {
    return (
    <ListGroup>
      {this.state.items && this.state.items.map((item, key) => {
        return  <ListGroupItem  key={key}> {item.name} </ListGroupItem> }
      )}
    </ListGroup>
    );
  }
}

export default ListTodo;
