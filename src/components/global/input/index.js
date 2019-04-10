/* eslint-disable */
import React, { Component } from 'react';

// Styles
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { EventEmitter } from 'events';

// import PropTypes from 'prop-types';
// Components

class InputTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      value: ''
    })
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      value: event.target.value
    });
    localStorage.setItem('Task', event.target.value);
  };
  
  render() {
    return (
      <div >
        <InputGroup>
          <Input placeholder="task" value={this.state.value}  onChange={this.handleChange} />
        </InputGroup>
      </div>
    );
  }
}

export default InputTodo;
