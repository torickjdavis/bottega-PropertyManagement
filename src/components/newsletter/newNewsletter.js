import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewNewsletterForm from './newNewsletterForm';

class NewNewsletter extends Component {
  
  onSubmit = (fields) => {
    const { title, body, image } = fields;
    
    let formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);
    formData.append('image', image);
    
    this.props.createNewNewsletter(this.props._id, formData, () => {
      this.props.history.push('/dashboard');
    });
  }
  
  onCancel = () => {
    this.props.history.push('/dashboard');
  }
  
  render() {
    return(
      <div className="newNewsletter">
        <NewNewsletterForm
        onCancel={() => this.onCancel()}
        onSubmit={(event) => this.onSubmit(event)}
        formTitle='New Newsletter'
        fieldOnePlaceholder='Newsletter Title'
        fieldOneTitle='Newsletter Title'
        fieldTwoPlaceholder='Newsletter Body'
        fieldTwoTitle='Body'
        />
      </div>
    );
  }
}

export default connect(null, actions)(NewNewsletter);