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

// NEWSLETTER
import NewNewsletter from './components/newsletter/newNewsletter';
import EditNewsletter from './components/newsletter/editNewsletter';
import DetailNewsletter from './components/newsletter/detailNewsletter';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
          <Layout>
          {/* AUTH */}
          <Route path='/' exact component={SignIn}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          
          {/* DASHBOARD */}
          {/* TEMPORARILY REMOVED FOR DEV: 
            <Route path='/dashboard' component={requireAuth(Dashboard)}/>
          */}
          <Route path='/dashboard' component={Dashboard}/>
          
          {/* NEWSLETTER */}
          <Route path='/newsletter/new' component={requireAuth(NewNewsletter)}/>
          <Route path='/newsletter/edit/:id' component={requireAuth(EditNewsletter)}/>
          <Route path='/newsletter/detail/:id' component={requireAuth(DetailNewsletter)}/>
          
          {/* REQUESTS */}
          <Route path='/request/new' component={requireAuth(NewNewsletter)}/>
          </Layout>
        </Switch>
      </Router>
    </Provider>, document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
