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

  render() {
    return (
      <div >
        <Button color="primary" onClick={this.handleClick}>Send</Button>{' '}
      </div>
    );
  }
}

export default ButtonTodo;
