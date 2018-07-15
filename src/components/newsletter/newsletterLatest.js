import React, { Component } from 'react';

class NewsletterLatest extends Component {
  render() {
    const { title, body, imageURL } = this.props;
    
    return(
      <div className="newsletterLatest">
        <h1 className="newsletterLatest-title">{title}</h1>
        <img className="newsletterLatest-image" src={imageURL}/>
        <div className="newsletterLatest-body">
          <p>{body}</p>
        </div>
      </div>
    );
  }
}

export default NewsletterLatest;