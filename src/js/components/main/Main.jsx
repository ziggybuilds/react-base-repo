import React, { Component } from 'react';

import Header from './Header';
import Video from './Video';
import CTA from './CTA';
import ImageSection from './ImageSection';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			headerTitle: '',
			headerTopper: '',
			headerImage: '',
			modules: [],
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props !== nextProps) {
			const data = nextProps.siteData;
			const headerTopper = data.header_topper;
			const headerTitle = data.header_title;
			const headerImage = data.header_image;

			// if modules === true
			let modules = [];
			if (data.modules_content) {
				console.log(data.modules_content);
				modules = data.modules_content.map((item) => {
					switch (item.acf_fc_layout) {
					case 'video':
						return (<Video
							key={item.title}
							title={item.title}
							url={item.video_url}
							topper={item.topper}
						/>);
					case 'cta':
						return <CTA key={item.title} title={item.title} url={item.url} topper={item.topper} />;
					case 'image_section':
						return (<ImageSection
							key={item.title}
							title={item.title}
							topper={item.topper}
							image={item.image}
						/>);
					default:
						return '';
					}
				});
			}

			this.setState({
				headerTitle,
				headerTopper,
				headerImage,
				modules,
			});
		}
	}

	render() {
		return (
			<div>
				<Header
					title={this.state.headerTitle}
					topper={this.state.headerTopper}
					image={this.state.headerImage}
				/>
				{this.state.modules}
			</div>
		);
	}
}
export default Main;
