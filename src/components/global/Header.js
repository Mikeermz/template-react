/* eslint-disable */
import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent'
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: 'Hello'
    }
  }

  static Proptypes = {
    name: PropTypes.string.isRequired
  }
  componentDidMount = () => {
    setTimeout(()=>{
      this.setState({
        message: `Hello from Did mount`
      })
    }, 3000);
  };

  render() {
    const  { name }  = this.props
    return (
      <div >
       <NavbarComponent/>
       <div>{this.state.message} {name} </div>
      </div>
    );
  }
}

export default Header;

