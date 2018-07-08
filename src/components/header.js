import React, { Component } from 'react';
import HeaderBar from './headerBar';

class Header extends Component {
	render() {
		return [
			<header>
				<h1 className="title">Welcome to HOA Manager!</h1>
				<p className="subtitle">Please sign in to continue.</p>
			</header>,
			HeaderBar(),
			this.props.children
		];
	}
}

export default Header;
