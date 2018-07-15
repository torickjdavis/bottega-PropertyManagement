import React from 'react';

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];

export default function DateBox({date}) {
  return (
    <div className="dateBox">
      <div className="day">{ date.getDate() }</div>
      <div className="month-year">{ monthNames[date.getMonth()]} {date.getFullYear()}</div>
    </div>
  );
}