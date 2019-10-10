import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Signup from './views/User/Signup/Signup';
import Login from './views/User/Login/Login';
import './App.css';

const App=() => {
  return(
  <BrowserRouter>
    <div>
    <Header/>
      <Switch>
        {/* <Route path='/' component={Home} exact /> */}
        <Route path='/signup' component={Signup} exact />
        <Route path='/login' component={Login} exact />
      </Switch>
    </div>
  </BrowserRouter>
  )
  
}

export default App;
