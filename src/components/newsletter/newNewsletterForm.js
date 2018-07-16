import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import FormTitle from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from '../textLink';

class NewNewsletterForm extends Component {
	render() {
		
		const { handleSubmit } = this.props;
		
		return (
			<form onSubmit={ handleSubmit } className='newNewsletter-form'>
				<FormTitle text="Sign In"/>
				<Field
					className='email'
					component={ FormInput }
					name='email'
					type='email'
					placeholder='Enter Email'
					title='Email'
				/>
			</form>
		);
	}
}

NewNewsletterForm = reduxForm({
	form: 'newNewsletter'
})(NewNewsletterForm);

export default NewNewsletterForm;
