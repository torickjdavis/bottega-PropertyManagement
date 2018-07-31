import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class ActionBox extends Component {
  render() {
    const { count, title, icon } = this.props;
    const { changeSelectedRequestType, selectedRequestType } = this.props;
    const className = `actionBox ${selectedRequestType == title ? 'active' : 'inactive'}`;
    return (
      <a onClick={()=> changeSelectedRequestType(title)} className={className}>
        <div className="count">{count}</div>
        <div className="title">{title}</div>
        <i className={`${icon} icon`}></i> {/* refactor Icon component to be used for this case */}
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