import React, { Component } from 'react';

import ActionBox from './actionBox';

class RequestBoxes extends Component {
  render() {
    return (
        <div className='requestsBoxes'>
          <ActionBox title={'pending'} count={2} />
          <ActionBox title={'in progress'} count={3} />
          <ActionBox title={'complete'} count={5} />
        </div>
      );
  }
}

export default RequestBoxes;