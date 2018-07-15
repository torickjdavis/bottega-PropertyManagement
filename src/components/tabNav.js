import React, { Component } from 'react';

class TabNav extends Component {
  render() {
    var JSX = [];
    
    this.props.tabs.map((tab, index) => {
      JSX.push(tab.component);
    });
    
    return JSX;
  }
}

export default TabNav;