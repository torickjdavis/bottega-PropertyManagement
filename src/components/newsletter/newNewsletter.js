import React, { Component } from 'react';

import NewNewsletterForm from './newNewsletterForm';

class NewNewsletter extends Component {
  
  onSubmit = (fields) => {
    console.log('trying to submit');
  }
  
  onCancel = () => {
    console.log('trying to cancel');
  }
  
  render() {
    return(
      <div className="newNewsletter">
        <NewNewsletterForm onCancel={() => this.onCancel()} onSubmit={(event) => this.onSubmit(event)}/>
      </div>
    );
  }
}

export default NewNewsletter;