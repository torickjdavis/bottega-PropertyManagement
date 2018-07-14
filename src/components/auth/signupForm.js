import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import FormTitle from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from '../textLink';

class SignUpForm extends Component {
	render() {
		const { handleSubmit } = this.props; // handleSubmit = this.props.handleSubmit
		
		return (
			<form onSubmit={ handleSubmit } className='sign-up-form'>
				<FormTitle text="New User"/>
				<Field
					className='fullName'
					component={ FormInput }
					name='fullName'
					type='text'
					placeholder='Enter Your Full Name'
					title='Full Name'
				/>
				<Field
					className='unit'
					component={ FormInput }
					name='unit'
					type='text'
					placeholder='Enter Unit #'
					title='Unit #'
				/>
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
					className='createAccount'
					component={ FormButton }
					name='createAccount'
					type='submit'
					title='Create Account'
				/>
				<div className="text-links">
					<TextLink to='/signin' text='Already Registered? Sign In'/>
				</div>
			</form>
		);
	}
}

SignUpForm = reduxForm({
	form: 'signup'
})(SignUpForm);

export default SignUpForm;
