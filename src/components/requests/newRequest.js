import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewNewsletterForm from '../newsletter/newNewsletterForm';

class NewRequest extends Component {
  
  onSubmit = fields => {
    const { title, body, image } = fields;
    
    let formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);
    formData.append('image', image);
    
    this.props.createNewRequest(this.props._id, formData, () => {
      this.props.history.push('/dashboard');
    });
  }
  
  onCancel = () => {
    this.props.history.push('/dashboard');
  }
  
  render() {
    return(
      <div className="newRequest">
        <NewNewsletterForm
        onCancel={() => this.onCancel()}
        onSubmit={(event) => this.onSubmit(event)}
        formTitle='New Request'
        fieldOnePlaceholder='Service Request Title Here'
        fieldOneTitle='Service Request Title'
        fieldTwoPlaceholder='Service Request Description'
        fieldTwoTitle='Description'
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { _id } = state.auth.user;
  return { _id };
}

export default connect(mapStateToProps, actions)(NewRequest);