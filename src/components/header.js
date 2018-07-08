import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header>
				<h1>Welcome to HOA Manager!</h1>
				<p>Please sign in to continue.</p>
				{this.props.children}
			</header>
		);
	}
}

export default Header;
