import React, { Component } from 'react';
import './assets/css/App.css';
// import PropTypes from 'prop-types';
// Components
import Header from './global/Header';
import Footer from './global/Footer';

class App extends Component {
  setYear =() => {
    return new Date().getFullYear();
  }
  render() {
    return (
      <div className="App">
       <Header/>
       <Footer year={this.setYear()}/>
      </div>
    );
  }
}

export default App;
