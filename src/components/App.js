import React, { Component } from 'react';
import './assets/css/App.css';
// Components
import Header from './global/Header';
import Footer from './global/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Footer/>
      </div>
    );
  }
}

export default App;
