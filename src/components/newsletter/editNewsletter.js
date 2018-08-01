import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import EditNewsletterForm from './editNewsletterForm';

class EditNewsletter extends Component {
  
  onSubmit = (fields) => {
    const { title, body, image } = fields;
    
    let formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);
    formData.append('image', image); // backend detects undefined, and doesn't update if such
    
    this.props.editNewsletter(this.props.match.params.id, formData, () => {
      this.props.history.push('/dashboard');
    });
  }
  
  onCancel = () => {
    this.props.history.push('/dashboard');
    // console.log('trying to cancel');
  }
  
  componentDidMount() {
    this.props.fetchNewsletterWithId(this.props.match.params.id);
  }
  
  render() {
    return(
      <div className="newNewsletter">
        <EditNewsletterForm
          onCancel={() => this.onCancel()}
          onSubmit={(event) => this.onSubmit(event)}
          formTitle='Edit Newsletter'
          fieldOnePlaceholder='Newsletter Title'
          fieldOneTitle='Newsletter Title'
          fieldTwoPlaceholder='Newsletter Body'
          fieldTwoTitle='Body'
        />
      </div>
    );
  }
}


export default connect(null, actions)(EditNewsletter);