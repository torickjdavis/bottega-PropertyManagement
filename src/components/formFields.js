import React, { Component } from 'react';

export class FormInput extends Component {
	render() {
		const { className, title, input, type, placeholder } = this.props;
		return (
			<div className='form-input'>
				<label className='form-input-title'>{title}</label>
				<input
					className={`form-input ${className || ''}`}
					type={type}
					placeholder={placeholder}
					{...input}
				/>
			</div>
		);
	}
}
