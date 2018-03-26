import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './main/Main';
import Article from './articles/Article';
import Category from './categories/Category';

const Routes = ({ posts, siteData }) => (
	<Switch>
		<Route
			path="/posts/:id"
			render={({ match }) => <Article posts={posts} match={match} />}
		/>
		<Route
			path="/categories/:id"
			render={({ match }) => <Category siteData={siteData} posts={posts} match={match} />}
		/>
		<Route
			exact path="/"
			render={() => <Main siteData={siteData} posts={posts} />}
		/>
	</Switch>
);

export default Routes;
