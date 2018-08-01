import React from 'react';

export default function Header({ title, subtitle }) {
	
	return (
		<header>
			<h1 className="title">{title}</h1>
			<p className="subtitle">{subtitle}</p>
		</header>
	);
}

export function HeaderBar({hideBar}) {
	return <div className="bar"></div>;
}
