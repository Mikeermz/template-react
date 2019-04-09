/* eslint-disable */
import React, { Component } from 'react';
import api from '../../../api';

// Styles
import { Button } from 'reactstrap';

class ButtonTodo extends Component {
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
        <Button color="primary" onClick={this.handleClick}>Send</Button>{' '}
      </div>
    );
  }
}

export default ButtonTodo;
