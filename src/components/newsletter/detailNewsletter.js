import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import DateBox from './dateBox';
import NewsletterLatest from './newsletterLatest';

class DetailNewsletter extends Component {
  
  componentDidMount() {
    this.props.fetchNewsletterWithId(this.props.match.params.id);
  }
  
  render() {
    return (
        <div className='newsletterDetail'>
          <DateBox {...this.props.newsletterToEdit}/>
          <NewsletterLatest {...this.props.newsletterToEdit}/>
        </div>
      );
  }
}

function mapStateToProps(state) {
  const { newsletterToEdit } = state.newsletters;
  return { newsletterToEdit };
}

export default connect(mapStateToProps, actions)(DetailNewsletter);