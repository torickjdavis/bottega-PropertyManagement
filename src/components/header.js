import React from 'react';

export default function Header() {
	return (
		<header>
			<h1 className="title">Welcome to HOA Manager!</h1>
			<p className="subtitle">Please sign in to continue.</p>
		</header>
	);
}

export function HeaderBar() {
	return (
		<div className="bar"></div>
	);
}
