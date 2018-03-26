const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const extractSass = new ExtractTextPlugin({
	filename: 'style.css'
});

const config = {
	entry: [
		'babel-polyfill',
		'./src/js/Index.jsx'
	],
	devtool: 'inline-source-map',
	devServer: {
		publicPath: '/dist/',
		historyApiFallback: true,
		hot: true
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/',
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.json']
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /.js|jsx$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			},
			{ test: /\.js|jsx$/, 
				include: [path.resolve(__dirname, 'src/js')],
				use: 'babel-loader', exclude: /node_modules/
			},
			{ test: /\.scss$/,
				include: [path.resolve(__dirname, 'src/scss')],
				use: extractSass.extract({
					use: [{ loader: 'css-loader' },  {loader: 'postcss-loader'}, { loader: 'sass-loader' }],
					// use style-loader in development
					fallback: 'style-loader'
				})
			}
		]
	},
	plugins: [
		extractSass, new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()
	]
};

module.exports = config;

