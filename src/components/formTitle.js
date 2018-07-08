import React from 'react';

export default function FormTitle(props) {
	const { className, text } = props;
	return (
		<h1 className={`form-title ${className || ''}`}>{text}</h1>
	);
}
