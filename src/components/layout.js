import React, { Component } from 'react';

import Header, { HeaderBar } from './header';

class Layout extends Component {
	render() {
		return (
			<section className="layout">
				<Header/>
				<HeaderBar/>
				{this.props.children}
			</section>
		);
	}
}

export default Layout;
