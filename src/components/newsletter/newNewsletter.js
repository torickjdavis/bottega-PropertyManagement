import React, { Component } from 'react';

import NewNewsletterForm from './newNewsletterForm';

class NewNewsletter extends Component {
  
  onSubmit = (fields) => {
    this.props.history.push('/dashboard');
    console.log('trying to submit');
  }
  
  onCancel = () => {
    this.props.history.push('/dashboard');
    // console.log('trying to cancel');
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

export default NewNewsletter;