import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import FormTitle from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from '../textLink';

class NewNewsletterForm extends Component {
	render() {
		
		const { handleSubmit } = this.props;
		
		return (
			<form onSubmit={ handleSubmit } className='sign-in-form'>
				<FormTitle text="Sign In"/>
				<Field
					className='email'
					component={ FormInput }
					name='email'
					type='email'
					placeholder='Enter Email'
					title='Email'
				/>
				<Field
					className='password'
					component={ FormInput }
					name='password'
					type='password'
					placeholder='Password'
					title='Password'
				/>
				<Field
					className='login'
					component={ FormButton }
					name='login'
					type='submit'
					title='Sign In'
				/>
				<div className="text-links">
					<TextLink to='/forgot' text='Forgot Password'/>
					<TextLink to='/signup' text='Not a member? Register here'/>
				</div>
			</form>
		);
	}
}

NewNewsletterForm = reduxForm({
	form: 'newNewsletter'
})(NewNewsletterForm);

export default NewNewsletterForm;
