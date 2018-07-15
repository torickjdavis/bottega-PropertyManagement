import React, { Component } from 'react';

class NewsletterLatest extends Component {
  render() {
    return(
      <div className="newsletterLatest">
        <h1 className="newsletterLatest-title">TITLE GOES HERE</h1>
        <img className="newsletterLatest-image" src='http://via.placeholder.com/960x258'/>
        <div className="newsletterLatest-body">
          <p>Lorem Ipsum</p>
        </div>
      </div>
    );
  }
}

export default NewsletterLatest;