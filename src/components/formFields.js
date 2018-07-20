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

export class FormTextArea extends Component {
	render() {
		const { className, title, input, placeholder } = this.props;
		return (
			<div className={`form-textarea ${className || ''}`}>
				<label className='form-textarea-title'>{title}</label>
				<textarea
					placeholder={placeholder}
					{...input}
				></textarea>
			</div>
		);
	}
}

export class FormButton extends Component {
	render() {
		const { className, title, input, type, small, alternative, onClick } = this.props;
		return (
			// line 40 and 41 have a space on the end, because it's a string
			<div className={`
				${small ? 'form-button-small' : 'form-button'} 
				${alternative ? 'alternative' : ''} 
				${className || ''}
			`}>
				<button
					type={type}
					{...input}
					onClick={onClick}
				>
				{title}
				</button>
			</div>
		);
	}
}

export class FormImage extends Component {
	render() {
		const { className, title, input, type, imageURL } = this.props;
		return (
			<div className={`form-image ${className || ''}`}>
				<label className='form-image-title'>{title}</label>
				<img
					src={imageURL}
				/>
				<input
					className='form-image-replace'
					type='button'
					// id=''
					value='Replace'
					onClick={
						() => document.querySelector('#file') ? document.querySelector('#file').click() : ''
					}
				/>
				<input 
					{...input}
					type='file'
					style={{display: 'none'}}
					id='file'
					name='file'
					accepts='image/*'
					value={undefined}
				/>
				{/* Replace Image Button */}
			</div>
		);
	}
}

