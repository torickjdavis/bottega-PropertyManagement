import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import FormTitle from '../formTitle';
import { FormInput, FormButton, FormTextArea, FormImage } from '../formFields';

import { ROOT_URL } from '../../config';

class EditNewsletterForm extends Component {
	render() {
		
		const { handleSubmit, formTitle } = this.props;
		const {
			fieldOnePlaceholder, fieldOneTitle,
			fieldTwoPlaceholder, fieldTwoTitle
			
		} = this.props;
		
		return (
			<form onSubmit={ handleSubmit } className='newNewsletter-form'>
				<FormTitle text={formTitle}/>
				<Field
					className='newsletter-title'
					component={ FormInput }
					name='title'
					type='text'
					placeholder={fieldOnePlaceholder}
					title={fieldOneTitle}
				/>
				<Field
					className='body'
					component={ FormTextArea }
					name='body'
					placeholder={fieldTwoPlaceholder}
					title={fieldTwoTitle}
				/>
				<Field
					className="submit"
					small={true}
					alternative={true}
					component={ FormButton }
					name="submit"
					type="submit"
					title="Submit"
				/>
				<Field
					className="cancel"
					small={true}
					component={ FormButton }
					name="cancel"
					type="button"
					title="Cancel"
					onClick={this.props.onCancel}
				/>
				<Field
					className="image"
					component={ FormImage }
					name="image"
					// type="file" // always 'file'
					title="Image"
					imageUrl={this.props.initialValues.imageUrl ? 
										`${ROOT_URL}/${this.props.initialValues.imageUrl}` : 
										'http://via.placeholder/150x137'
					}
				/>
			</form>
		);
	}
}

EditNewsletterForm = reduxForm({
	form: 'editNewsletter',
	enableReinitialize: true
})(EditNewsletterForm);


function mapStateToProps(state) {
  const { newsletterToEdit } = state.newsletters;
  return {
    initialValues: newsletterToEdit
  };
}

EditNewsletterForm = connect(mapStateToProps)(EditNewsletterForm);
export default EditNewsletterForm;
