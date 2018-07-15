import React, { Component } from 'react';

import DateBox from './dateBox';
import Archive from './archive';
import NewsletterLatest from './newsletterLatest';

class NewsletterGrid extends Component {
  render() {
    return (
      <div className="newsletter-grid">
        {/*Add Button*/}
        <DateBox date={new Date()} />
        <Archive />
        <NewsletterLatest />
      </div>
    );
  }
}

export default NewsletterGrid;