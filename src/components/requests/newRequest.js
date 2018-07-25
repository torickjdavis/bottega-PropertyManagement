import React, { Component } from 'react';

import NewNewsletterForm from '../newsletter/newNewsletterForm';

class NewRequest extends Component {
  
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
      <div className="newRequest">
        <NewNewsletterForm
        onCancel={() => this.onCancel()}
        onSubmit={(event) => this.onSubmit(event)}
        formTitle='New Request'
        />
      </div>
    );
  }
}

export default NewRequest;