import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, HashRouter } from 'react-router-dom';
import LoginForm from '../_components/LoginForm';
import OTPLogin from '../_components/OTPLogin';
import RegistrationForm from '../_components/RegistrationForm'
import MainScreen from '../_components/MainScreen';

class AllRoutes extends Component {

  render() {
    return ( 
      <HashRouter>
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <Route exact path='/otplogin' component={OTPLogin}/>
          <Route exact path='/register' component={RegistrationForm}/>
          <Route exact path='/home' component={MainScreen}/>
        </Switch>
      </HashRouter>
    )
  }
}


export default connect((state) => {
  return {}
}, (dispatch) => {
  return {}
})(AllRoutes);