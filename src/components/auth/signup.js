import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import SignUpForm from './signupForm';

class SignUp extends Component {
	
	componentDidMount() {
		this.props.updateHeader('Welcome to HOA Manager!', 'Please sign in to continue.', false);
	}
	
	onSubmit = (fields) => {
		this.props.signUp(fields, () => {
			console.log('Navigate to dashboard');
			this.props.history.push('/dashboard');
		});
	}
	
	render() {
		return (
			<div className="sign-up">
        <SignUpForm onSubmit={(event) => this.onSubmit(event) }/>
      </div>
		);
	}
}

export default connect(null,actions)(SignUp);
