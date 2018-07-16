import React, { Component } from 'react';

import Button from '../button';

class NewsletterLatest extends Component {
  handleEdit = () => {
    console.log('Trying to handle an Edit');
  }
  
  render() {
    const { title, body, imageURL } = this.props;
    
    return(
      <div className="newsletterLatest">
        <h1 className="newsletterLatest-title">{title}</h1>
        <img className="newsletterLatest-image" src={imageURL}/>
        <Button className="newsletterLatest-editButton" callback={() => this.handleEdit() } icon="fas fa-pencil-alt"/>
        <div className="newsletterLatest-body">
          <p>{body}</p>
        </div>
      </div>
    );
  }
}

export default NewsletterLatest;