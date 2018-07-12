import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import FormTitle from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from '../textLink';

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

SignInForm = reduxForm({
	form: 'signin'
})(SignInForm);

export default SignInForm;
