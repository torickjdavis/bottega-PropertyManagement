import React, { Component } from 'react';

class ActionBox extends Component {
  render() {
    const { count, title } = this.props;
    return (
      <div className="actionBox">
        <div className="count">{count}</div>
        <div className="title">{title}</div>
      </div>
    );
  }
}

export default ActionBox;