import React from 'react';

const CTA = ({ title, topper, url }) => (
	<div>
		{title ? <h1>title</h1> : ''}
		{topper ? <div>topper</div> : ''}
		{url ? <a href={url}>Submit</a> : ''}
	</div>
);

export default CTA;
