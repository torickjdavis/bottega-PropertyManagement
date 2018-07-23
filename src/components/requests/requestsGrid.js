import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import DateBox from './dateBox';
import Archive from './archive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';
import History from '../../history';

class RequestsGrid extends Component {
  
  render() {
    
    return (
      <div className="requests-grid">
      </div>
    );
  }
}

function mapStateToProps(state) {
  
}

export default connect(mapStateToProps, actions)(RequestsGrid);