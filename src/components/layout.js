import React, { Component } from 'react';

import Header, { HeaderBar } from './header';

class Layout extends Component {
	render() {
		return (
			<section className="layout">
				<Header title="Welcome to HOA Manager!" subtitle="Please sign in to continue."/>
				<HeaderBar/>
				{this.props.children}
			</section>
		);
	}
}

export default Layout;
