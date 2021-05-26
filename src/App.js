import React from 'react';
import LoginPage from './template/login'
import RegisterPage from './template/register'
import TestPage from './template/test'
import DashBoardPage from './template/dashboard'
import AdminPage from './template/AdminPage'
import Header from './template/Header'
import './template/css/app.css';
import styled from 'styled-components';

import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


function App(){
  return(
   
    <Router>
      <div class="full">
        <Header/>
        <div className="margin-">
        <Switch >
          <Route exact path='/login' component={LoginPage}/>
          <Route exact path='/register' component={RegisterPage}/>
          <Route exact path='/test' component={TestPage}/>
          <Route exac path='/dashboard' component={DashBoardPage}/>
          <Route exac path='/admin' component={AdminPage}/>
        </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
