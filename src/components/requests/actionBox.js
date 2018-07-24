import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class ActionBox extends Component {
  render() {
    const { count, title, changeSelectedRequestType, selectedRequestType } = this.props;
    const className = `actionBox ${selectedRequestType == title ? 'active' : 'inactive'}`;
    return (
      <a onClick={()=> changeSelectedRequestType(title)} className={className}>
        <div className="count">{count}</div>
        <div className="title">{title}</div>
      </a>
    );
  }
}

function mapStateToProps(state) {
  const { selectedRequestType } = state.requests;
  return { selectedRequestType };
}

ActionBox = connect(mapStateToProps, actions)(ActionBox);

export default ActionBox;