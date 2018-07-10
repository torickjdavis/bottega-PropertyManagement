import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import FormTitle from '../formTitle';
import { FormInput } from '../formFields';

class SignInForm extends Component {
	render() {
		return (
			<form className='sign-in-form'>
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
			</form>
		);
	}
}

SignInForm = reduxForm({
	form: 'signin'
})(SignInForm);

export default SignInForm;
