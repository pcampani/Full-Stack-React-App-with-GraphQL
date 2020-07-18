const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: {
		bundle: './src/index.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: isDevelopment ? '[name].js' : '[name].[hash].js'
	},
	mode: isDevelopment ? 'development' : 'production',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.s?css$/,
				use: [ MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
			},
			{
				test: /\.(svg|png|gif|jpe?g|ico)$/,
				use: 'file-loader'
			}
		]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		historyApiFallback: true,
		hot: true
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
		new HTMLWebpackPlugin({
			template: './src/index.html',
			favicon: './favicon.png'
		})
	]
}
