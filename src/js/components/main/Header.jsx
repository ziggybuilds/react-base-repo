import React from 'react';

const Header = ({ title, topper, image }) => (
	<header>
		<div className="header-content">
			{title ? <div><h1>{title}</h1></div> : '' }
			{topper ? <div>{topper}</div> : '' }
		</div>
		{image ? <div className="header-image"><img src={image} alt="Header" /></div> : ''}
	</header>
);

export default Header;
