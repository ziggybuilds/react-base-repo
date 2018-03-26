import React from 'react';

const Footer = ({ copyright, disclaimer, logo }) => (
	<footer>
		<div className="footer-content">
			{copyright ? <div>{copyright}</div> : '' }
			{disclaimer ? <div>{disclaimer}</div> : '' }
		</div>
		{logo ? <img src={logo} alt="footer" /> : ''}
	</footer>
);

export default Footer;
