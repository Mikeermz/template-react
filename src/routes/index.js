/* eslint-disable */
// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import App from '../components/App';
import Home from '../components/Home';
import myComponent from '../components/myComponent';
import Page404 from '../components/Page404';
// Routes 
const AppRoutes = () => 
<App>
  <Switch>
    <Route exact path ="/" component={Home}/> 
    <Route path="/myComponent" component={myComponent}/> 
    <Route component={Page404}/> 
  </Switch>
</App>

export default AppRoutes;
