import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewNewsletterForm from './newNewsletterForm';

class EditNewsletter extends Component {
  
  onSubmit = (fields) => {
    this.props.history.push('/dashboard');
    console.log('trying to submit');
  }
  
  onCancel = () => {
    this.props.history.push('/dashboard');
    // console.log('trying to cancel');
  }
  
  componentDidMount() {
    this.props.fetchNewsletterWithId(this.props.match.params.id);
  }
  
  render() {
    return(
      <div className="newNewsletter">
        <NewNewsletterForm
          newsletterToEdit={this.props.newsletterToEdit}
          onCancel={() => this.onCancel()}
          onSubmit={(event) => this.onSubmit(event)}
          formTitle='Edit Newsletter'
          fieldOnePlaceholder='Newsletter Title'
          fieldOneTitle='Newsletter Title'
          fieldTwoPlaceholder='Newsletter Body'
          fieldTwoTitle='Body'
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { newsletterToEdit } = state.newsletters;
  return {
    newsletterToEdit
  };
}

export default connect(mapStateToProps, actions)(EditNewsletter);