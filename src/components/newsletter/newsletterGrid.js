import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import DateBox from './dateBox';
import Archive from './archive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';
import History from '../../history';

class NewsletterGrid extends Component {
  handleAddNewsletter = () => {
    History.push('/newsletter/new');
  }
  
  componentDidMount() {
    this.props.fetchNewsletters();
  }
  
  render() {
    
    return (
      <div className="newsletter-grid">
        <Button className="newsletter-grid-addButton" icon="fas fa-plus" callback={() => this.handleAddNewsletter()}/>
        <DateBox {...this.props.latestNewsletter} />
        <Archive />
        <NewsletterLatest {...this.props.latestNewsletter} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { newsletters } = state.newsletters;
  const latestNewsletter = newsletters[0];
  
  return {latestNewsletter};
}

export default connect(mapStateToProps, actions)(NewsletterGrid);