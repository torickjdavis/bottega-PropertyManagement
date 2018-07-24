import React, { Component } from 'react';

import ActionBox from './actionBox';

class RequestBoxes extends Component {
  render() {
    return (
        <div className='requestsBoxes'>
          <ActionBox
            title={'Pending'}
            count={2}
          />
          <ActionBox
            title={'In-Progress'}
            count={3}
          />
          <ActionBox
            title={'Complete'}
            count={5}
          />
        </div>
      );
  }
}

export default RequestBoxes;