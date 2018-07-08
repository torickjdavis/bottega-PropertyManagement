import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import Header from './components/header';

import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Header>
          <Route path='/' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          </Header>
        </Switch>
      </BrowserRouter>
    </Provider>, document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
