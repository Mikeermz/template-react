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
      console.log(this.state.items)
    }).catch((error) => console.log(error));
  }
  componentDidMount() {
    this.apiCallGet();
  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.apiCallGet();
  }

  taskHandle = (event) => {
    const task = event.target.id
    api.put(`/tasks/${task}`)
         .then( (response) => {
           console.log(response.data)
            this.apiCallGet();
         }).catch( (error) => console.log(error.response))
  }

  render() {
    return (
    <ListGroup>
      {this.state.items && this.state.items.map((item, key) => {
        return  <ListGroupItem id={item._id} key={key} onClick={this.taskHandle}> {item.name} </ListGroupItem> }
      )}
    </ListGroup>
    );
  }
}

export default ListTodo;
