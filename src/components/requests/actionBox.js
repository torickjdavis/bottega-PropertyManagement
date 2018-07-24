import React, { Component } from 'react';

class ActionBox extends Component {
  render() {
    const { count, title, type, changeSelectedRequestType } = this.props;
    
    return (
      <a onClick={()=> changeSelectedRequestType(type)} className="actionBox">
        <div className="count">{count}</div>
        <div className="title">{title}</div>
      </a>
    );
  }
}

export default ActionBox;