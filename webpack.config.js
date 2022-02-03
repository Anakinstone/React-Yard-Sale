const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		assetModuleFilename: 'assets/images/[hash][ext][query]'
	},
	mode: 'production',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@icons': path.resolve(__dirname, 'src/assets/icons/'),
			'@logos': path.resolve(__dirname, 'src/assets/logos/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@context': path.resolve(__dirname, 'src/context/')
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
            {
				test: /\.css$/,
				use: [
				  MiniCssExtractPlugin.loader,
				  'css-loader'
				]
			  },
			  {
				test: /\.scss$/,
				use: [
				  MiniCssExtractPlugin.loader,
				  'css-loader',
				  'sass-loader'
				]
			  },
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
        		type: 'asset/resource'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'
        }),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src", "assets/logos"),
					to: "assets/images/logos"
				},
				{
					from: path.resolve(__dirname, "src", "assets/icons"),
					to: "assets/images/icons"
				}
			]
		}),
		new Dotenv(),
		new CleanWebpackPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin(),
		]
	}
}