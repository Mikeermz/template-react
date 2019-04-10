/* eslint-disable */
import React, { Component } from 'react';
import api from '../../api';
// Components
import ListTodo from '../global/list';

import InputTodo from '../global/input/';
//Styles
import { Button } from 'reactstrap';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: ''
    }
  }

  handleClick = () => {
    const task = {
      name:  localStorage.getItem('Task')
    }
    api.post(`/tasks`, task).then((response) =>{
      console.log(response.data)
      this.forceUpdate(() => {
        this.setState({
          task: task.name
        })
      })
    }).catch((error) => console.log(error));
  }
  render() {
    return (
      <div >
      <InputTodo taskName="hola"/>
      <Button color="primary" onClick={this.handleClick}>Send</Button>{' '}
      <ListTodo items="tasks"/>
      </div>
    );
  }
}

export default Todo;
