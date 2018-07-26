import React, { Component } from 'react';

import { connect } from 'react-redux';

import ActionBox from './actionBox';

class RequestBoxes extends Component {
  render() {
    const { pendingCount, progressCount, completeCount } = this.props;
    return (
        <div className='requestsBoxes'>
          <ActionBox
            title={'Pending'}
            count={pendingCount}
          />
          <ActionBox
            title={'In-Progress'}
            count={progressCount}
          />
          <ActionBox
            title={'Complete'}
            count={completeCount}
          />
        </div>
      );
  }
}

function mapStateToProps(state) {
   const { requests } = state.requests;
   let pendingCount = 0;
   let progressCount = 0;
   let completeCount = 0;
   
   requests.map(request => {
    switch (request.status) {
      case 'pending':
        pendingCount++;
        break;
      case 'progress':
        progressCount++;
        break;
      case 'complete':
        completeCount++;
        break;
    }
   });

  return {
    pendingCount,
    progressCount,
    completeCount
  };
}

export default connect(mapStateToProps)(RequestBoxes);