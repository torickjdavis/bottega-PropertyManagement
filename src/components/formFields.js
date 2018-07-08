import React, { Component } from 'react';

export class FormInput extends Component {
	render() {
		const { className, title } = this.props;
		return (
			<div classNam='form-input'>
				<label>{title}</label>
				<input className={`form-input ${className || ''}`}/>
			</div>
		);
	}
}
