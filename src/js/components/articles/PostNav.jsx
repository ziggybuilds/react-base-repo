import React from 'react';
import { Link } from 'react-router-dom';

const PostNav = ({ nextPost, prevPost, totalPosts }) => (
	<div>
		{nextPost >= totalPosts ? '' : <div><Link to={`/posts/${nextPost}`}>Next</Link></div>}
		{prevPost < 0 ? '' : <div><Link to={`/posts/${prevPost}`}>Previous</Link></div>}
	</div>
);

export default PostNav;
