import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import Button from '../button';
import History from '../../history';

import RequestsBoxes from './requestsBoxes';
import Requests from './requests';

class RequestsGrid extends Component {
  handleAddRequest = () => {
    History.push('/requests/new');
  }
  
  componentDidMount() {
    this.props.fetchRequests();
  }
  
  render() {
    
    return (
      <div className="requests-grid">
        <Button className="requests-grid-addButton" icon="fas fa-plus" callback={() => this.handleAddRequest()}/>
        <RequestsBoxes />
        <Requests />
      </div>
    );
  }
}

// function mapStateToProps(state) {}

export default connect(null, actions)(RequestsGrid);