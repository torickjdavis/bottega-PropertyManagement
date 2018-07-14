import React, { Component } from 'react';

import SignUpForm from './signupForm';

class SignUp extends Component {
	
	onSubmit = (fields) => {
		console.log('trying to submit', fields);
	}
	
	render() {
		return (
			<div className="sign-up">
        <SignUpForm onSubmit={(event) => this.onSubmit(event) }/>
      </div>
		);
	}
}

export default SignUp;
