import React, { Component } from 'react';

import { connect } from 'react-redux';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];

class DateBox extends Component {
  render() {
    const {date} = this.props;
    if(!date) {
      return <div>...Fetching Newsletters</div>;
    }
    
    return (
      <div className="dateBox">
        <div className="day">{ date.getDate() }</div>
        <div className="month-year">{ monthNames[date.getMonth()]} {date.getFullYear()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { newsletters } = state.newsletters;
  const latestNewsletter = newsletters[0];
  return {
    ...latestNewsletter
  };
}

export default connect(mapStateToProps)(DateBox);