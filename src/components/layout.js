import React, { Component } from 'react';

import { connect } from 'react-redux';

import Header, { HeaderBar } from './header';

class Layout extends Component {
	render() {
		const { title, subtitle, hideBar } = this.props;
		
		return (
			<section className="layout">
				<Header title={title} subtitle={subtitle}/>
				{ hideBar ? '' : <HeaderBar/>}
				{this.props.children}
			</section>
		);
	}
}

function mapStateToProps(state) {
	const header = state.header;
	return {
		...header
	};
}

export default connect(mapStateToProps)(Layout);
