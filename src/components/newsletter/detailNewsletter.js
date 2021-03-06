import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import DateBox from './dateBox';
import NewsletterLatest from './newsletterLatest';
import FormTitle from '../formTitle';
import { FormButton } from '../formFields';

class DetailNewsletter extends Component {
  
  componentDidMount() {
    this.props.fetchNewsletterWithId(this.props.match.params.id);
  }
  
  render() {
    return (
        <div className='newsletterDetail'>
          <FormTitle className='title' text='Newsletter Archive'/>
          <DateBox {...this.props.newsletterToEdit}/>
          <NewsletterLatest {...this.props.newsletterToEdit}/>
          <FormButton
            className='cancel'
            small={true}
            onClick={() => this.props.history.push('/dashboard')}
            title='Cancel'
          />
        </div>
      );
  }
}

function mapStateToProps(state) {
  const { newsletterToEdit } = state.newsletters;
  return { newsletterToEdit };
}

export default connect(mapStateToProps, actions)(DetailNewsletter);