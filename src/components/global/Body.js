/* eslint-disable */
import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Home from '../Home'
class Body extends Component {
  static propTypes = {
    content: Proptypes.object.isRequired,//libreria.tipodeObjeto.EsRequeridoOÑo
  }
  
  render() {
    const {content} = this.props
    return (
        <div>
          {/* <Home /> */}
          {content}
        </div>
    );
  }
}

export default Body;
