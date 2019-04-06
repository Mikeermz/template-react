/* eslint-disable */
import React, { Component } from 'react';

// Styles
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

// import PropTypes from 'prop-types';
// Components

class InputTodo extends Component {
  render() {
    return (
      <div >
        <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input placeholder="username" />
        </InputGroup>
      </div>
    );
  }
}

export default InputTodo;
