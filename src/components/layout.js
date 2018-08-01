import React, { Component } from 'react';

import { connect } from 'react-redux';

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

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(Layout);
