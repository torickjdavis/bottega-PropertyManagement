import React, { Component } from 'react';

// import { connect } from 'react-redux';
// import * as actions from '../../actions';

import Button from '../button';
import History from '../../history';

class RequestsGrid extends Component {
  handleAddRequest = () => {
    History.push('/request/new');
  }
  
  render() {
    
    return (
      <div className="requests-grid">
        <Button className="requests-grid-addButton" icon="fas fa-plus" callback={() => this.handleAddRequest()}/>
      </div>
    );
  }
}

/*function mapStateToProps(state) {}

export default connect(mapStateToProps, actions)(RequestsGrid);*/

export default RequestsGrid;