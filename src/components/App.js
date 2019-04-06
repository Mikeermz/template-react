/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Styles
import './assets/css/App.css';
// import PropTypes from 'prop-types';
// Components
import Header from './global/Header';
import Footer from './global/Footer';
import Body from './global/Body';

class App extends Component {
  static Proptypes = {
    children: PropTypes.object.isRequired
  }
  setYear =() => {
    return new Date().getFullYear();
  }
  render() {
    const {children} = this.props;
    const myName = "Mikees"
    return (
      <div className="App">
       <Header name={myName}/>
       <Body content={children} />
       <Footer  year={this.setYear()}/>
      </div>
    );
  }
}

export default App;
