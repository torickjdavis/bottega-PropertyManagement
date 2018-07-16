import React, { Component } from 'react';

import NewNewsletterForm from './newNewsletterForm';

class NewNewsletter extends Component {
  render() {
    return(
      <div className="newNewsletter">
        <NewNewsletterForm />
      </div>
    );
  }
}

export default NewNewsletter;