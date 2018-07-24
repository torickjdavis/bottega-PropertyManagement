import React, { Component } from 'react';

import ActionBox from './actionBox';

class RequestBoxes extends Component {
  render() {
    return (
        <div className='requestsBoxes'>
          <ActionBox
            title={'Pending'}
            count={2}
            type={'pending'}
          />
          <ActionBox
            title={'In-Progress'}
            count={3}
            type={'inProgress'}
          />
          <ActionBox
            title={'Complete'}
            count={5}
            type={'complete'}
          />
        </div>
      );
  }
}

export default RequestBoxes;