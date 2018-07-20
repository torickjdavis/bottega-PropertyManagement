import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import reducers from './reducers';

import reduxThunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import history from './history';

import Layout from './components/layout';

// AUTH
import requireAuth from './components/requireAuth';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';

// DASHBOARD
import Dashboard from './components/dashboard';

// Newsletter
import NewNewsletter from './components/newsletter/newNewsletter';
import EditNewsletter from './components/newsletter/editNewsletter';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
          <Layout>
          <Route path='/' exact component={SignIn}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          
          <Route path='/dashboard' component={requireAuth(Dashboard)}/>
          <Route path='/newsletter/new' component={requireAuth(NewNewsletter)}/>
          <Route path='/newsletter/edit/:id' component={requireAuth(EditNewsletter)}/>
          </Layout>
        </Switch>
      </Router>
    </Provider>, document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
