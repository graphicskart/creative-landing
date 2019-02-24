import React from 'react';
import HomePage from '../HomePage'
import { Route, Switch,BrowserRouter,Redirect } from 'react-router-dom'

export default () => (
  
  <BrowserRouter>
  	<Switch>
      <Route exact path="/" render={props=><HomePage {...props} />} />
    </Switch> 
  </BrowserRouter>
  
)








