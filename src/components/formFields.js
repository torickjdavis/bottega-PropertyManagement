import React, { Component } from 'react';

export class FormInput extends Component {
	render() {
		const { className, title, input, type, placeholder } = this.props;
		return (
			<div className={`form-input ${className || ''}`}>
				<label className='form-input-title'>{title}</label>
				<input
					type={type}
					placeholder={placeholder}
					{...input}
				/>
			</div>
		);
	}
}

export class FormButton extends Component {
	render() {
		const { className, title, input, type } = this.props;
		return (
			<div className={`form-button ${className || ''}`}>
				<button
					type={type}
					{...input}
				>
				{title}
				</button>
			</div>
		);
	}
}
