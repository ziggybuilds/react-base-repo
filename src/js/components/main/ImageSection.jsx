import React from 'react';

const ImageSection = ({ title, topper, image }) => (
	<div>
		{title ? <h1>title</h1> : ''}
		{topper ? <div>topper</div> : ''}
		<div>
			<img
				src={image}
				alt="section"
			/>
		</div>
	</div>
);

export default ImageSection;
