import React, { Component } from 'react';

import { connect } from 'react-redux';
// import * as actions from '../../actions';

import Button from '../button';
import History from '../../history';

class NewsletterLatest extends Component {
  handleEdit = () => {
    History.push('/newsletter/edit');
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

function mapStateToProps(state) {
  const { newsletters } = state.newsletters;
  const latestNewsletter = newsletters[0];
  
  return {...latestNewsletter};
}

export default connect(mapStateToProps)(NewsletterLatest);