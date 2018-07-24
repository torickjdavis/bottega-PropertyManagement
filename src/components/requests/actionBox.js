import React, { Component } from 'react';

class ActionBox extends Component {
  render() {
    const { count, title } = this.props;
    
    function callback() {
      console.log('Trying to select an ActionBox');
    }
    
    return (
      <a onClick={()=> callback()} className="actionBox">
        <div className="count">{count}</div>
        <div className="title">{title}</div>
      </a>
    );
  }
}

export default ActionBox;