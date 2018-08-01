import React, { Component } from 'react';

import Button from '../button';
import History from '../../history';

import { ROOT_URL } from '../../config';

import RequireAdmin from '../auth/requireAdmin';

class NewsletterLatest extends Component {
  handleEdit = () => {
    History.push(`/newsletter/edit/${this.props._id}`);
  }
  
  render() {
    const { title, body, imageUrl } = this.props;
    
    return(
      <div className="newsletterLatest">
        <h1 className="newsletterLatest-title">{title}</h1>
        <img className="newsletterLatest-image" src={`${ROOT_URL}/${imageUrl}`}/>
        <RequireAdmin>
          <Button className="newsletterLatest-editButton" callback={() => this.handleEdit() } icon="fas fa-pencil-alt"/>
        </RequireAdmin>
        <div className="newsletterLatest-body">
          <p>{body}</p>
        </div>
      </div>
    );
  }
}

export default NewsletterLatest;