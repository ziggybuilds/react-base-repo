const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
	filename: 'style.css'
});

const config = {
	entry: './src/js/index.js',
	devtool: 'inline-source-map',
	devServer: {
		publicPath: '/dist/',
		historyApiFallback: true 
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/',
	},
	module: {
		rules: [
			{ test: /\.js$/, 
				include: [path.resolve(__dirname, 'src/js')],
				use: 'babel-loader', exclude: /node_modules/
			},
			{ test: /\.scss$/,
				include: [path.resolve(__dirname, 'src/scss')],
				use: extractSass.extract({
					use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }],
					// use style-loader in development
					fallback: 'style-loader'
				})
			}
		]
	},
	plugins: [
		extractSass
	]
};

module.exports = config;

