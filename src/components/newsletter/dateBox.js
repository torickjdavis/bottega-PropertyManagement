import React, { Component } from 'react';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];

class DateBox extends Component {
  render() {
    const {date} = this.props;
    if(!date) {
      return <div>...Fetching Newsletters</div>;
    }
    
    const parsedDate = new Date(date);
    return (
      <div className="dateBox">
        <div className="day">{ parsedDate.getDate() }</div>
        <div className="month-year">{ monthNames[parsedDate.getMonth()]} {parsedDate.getFullYear()}</div>
      </div>
    );
  }
}

export default DateBox;