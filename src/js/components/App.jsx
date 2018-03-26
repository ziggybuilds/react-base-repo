import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import axios from 'axios';

import Routes from './Routes';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			siteData: {},
		};
	}

	componentDidMount() {
		axios('http://localhost/boilerplate-site-repo/headless-cms/wordpress/wp-json/wp/v2/posts/')
			.then(resp => {
				this.setState({
					posts: resp.data,
				});
			})
			.catch(error => {
				console.log(error);
			});
		axios('http://localhost/boilerplate-site-repo/headless-cms/wordpress/wp-json/wp/v2/pages/2')
			.then(resp => {
				const siteData = resp.data.acf;
				this.setState({
					siteData,
				});
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				<Routes siteData={this.state.siteData} posts={this.state.posts} />
			</div>
		);
	}
}

export default hot(module)(App);
