import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent'

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: 'Hello Mikee'
    }
  }

  componentDidMount = () => {
    console.log('Did Mount');
    setTimeout(()=>{
      this.setState({
        message: `Hello from Did mount Mikee`
      })
    }, 3000);
  };
  
  render() {
    console.log('render')
    return (
      <div >
       <NavbarComponent/>
       <div>{this.state.message}</div>
      </div>
    );
  }
}

export default Header;

