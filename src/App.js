import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Signup from './components/User/Signup/Signup';
import './App.css';

const App=() => {
  return(
  <BrowserRouter>
    <div>
    <Header/>
      <Switch>
        {/* <Route path='/' component={Home} exact /> */}
        <Route path='/signup' component={Signup} exact />
      </Switch>
    </div>
  </BrowserRouter>
  )
  
}

export default App;
