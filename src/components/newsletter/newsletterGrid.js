import React, { Component } from 'react';

import DateBox from './dateBox';

class NewsletterGrid extends Component {
  render() {
    return (
      <div className="newsletter-grid">
        {/*Add Button*/}
        <DateBox date={new Date()} />
        {/*Archive*/}
        {/*Newsletter (Content)*/}
      </div>
    );
  }
}

export default NewsletterGrid;