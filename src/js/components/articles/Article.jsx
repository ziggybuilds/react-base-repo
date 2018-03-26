import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';

import PostNav from './PostNav';

class Article extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: '',
			title: '',
			body: '',
			nextPost: '',
			prevPost: '',
		};
	}

	componentWillReceiveProps(nextProps) {
		const id = parseInt(nextProps.match.params.id, 10);

		if (this.state.id !== id) {
			const totalPosts = parseInt(nextProps.posts.length, 10);
			const nextPost = id >= totalPosts ? 1 : id + 1;
			const prevPost = id - 1;
			this.setState({
				id,
				title: nextProps.posts[id].title,
				body: nextProps.posts[id].body,
				nextPost,
				prevPost,
				totalPosts,
			});
		}
	}

	render() {
		return (
			<div id={this.state.id}>
				<h1>{this.state.title} {this.state.id}</h1>
				<p>{this.state.body}</p>
				<PostNav
					nextPost={this.state.nextPost}
					prevPost={this.state.prevPost}
					totalPosts={this.state.totalPosts}
				/>
			</div>
		);
	}
}

Article.defualtProps = {
	posts: [],
};

export default Article;
