import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import FormTitle from '../formTitle';
import { FormInput, FormButton, FormTextArea } from '../formFields';
import TextLink from '../textLink';

class NewNewsletterForm extends Component {
	render() {
		
		const { handleSubmit } = this.props;
		
		return (
			<form onSubmit={ handleSubmit } className='newNewsletter-form'>
				<FormTitle text="New Newsletter"/>
				<Field
					className='newsletter-title'
					component={ FormInput }
					name='title'
					type='text'
					placeholder='Newsletter Title'
					title='Body'
				/>
				<Field
					className='body'
					component={ FormTextArea }
					name='body'
					placeholder='Newsletter Body'
					title='Newsletter Body'
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
			</form>
		);
	}
}

NewNewsletterForm = reduxForm({
	form: 'newNewsletter'
})(NewNewsletterForm);

export default NewNewsletterForm;
