'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',

	entry: [
		'webpack-hot-middleware/client',
		path.resolve(__dirname, 'src/js/index.js')
	],

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],

	module: {
		loaders: [
			// js
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				include: path.join(__dirname, 'src/js')
			},

			// JSON
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: 'json',
				include: path.join(__dirname, 'src/fixtures')
			},

			// CSS
			{
				test: /\.styl$/,
				exclude: /(node_modules)/,
				loader: 'style-loader!css-loader!stylus-loader',
				include: path.join(__dirname, 'src/css')
			}
		]
	},

	resolve: {
		extensions: [ '', '.js', '.jsx', '.styl', '.json' ],
		fallback: path.join(__dirname, 'node_modules')
	},

	resolveLoader: {
		root: path.join(__dirname, 'node_modules')
	}
};
