import React, { Component } from 'react';

class Category extends Component {
	constructor(props) {
		super(props);

		this.state = {
			category: 'test',
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props !== nextProps) {
			console.log(nextProps);
		}
	}

	render() {
		return (
			<div>
			hello
				<h1>{this.state.category}</h1>
			</div>
		);
	}
}

export default Category;
