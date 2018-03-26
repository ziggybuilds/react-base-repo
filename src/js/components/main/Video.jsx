import React from 'react';

const Video = ({ title, topper, url }) => (
	<div>
		{title ? <h1>title</h1> : ''}
		{topper ? <div>topper</div> : ''}
		<div className="video-wrapper">
			<iframe
				title="video"
				className="video"
				src={url}
				frameBorder="0"
				allow="autoplay; encrypted-media"
				allowFullScreen
			/>
		</div>
	</div>
);

export default Video;
