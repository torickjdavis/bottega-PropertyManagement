import React, { Component } from 'react';

// import { connect } from 'react-redux';
// import * as actions from '../../actions';

import Button from '../button';
import History from '../../history';

import RequestsBoxes from './requestsBoxes';
import Requests from './requests';

class RequestsGrid extends Component {
  handleAddRequest = () => {
    History.push('/requests/new');
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

/*function mapStateToProps(state) {}

export default connect(mapStateToProps, actions)(RequestsGrid);*/

export default RequestsGrid;