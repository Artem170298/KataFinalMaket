const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require ('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loader = require('sass-loader');
const GhPagesWebpackPlugin = require('gh-pages-webpack-plugin');

//const isDev = process.env.NODE_ENV === 'development';
//const isProd = !isDev;


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main:['@babel/polyfill', './index.js'],
        },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        port: 4200,
        
    },
    plugins: [
        new HtmlWebpackPlugin({
			template: '../src/index.html',
            //template: path.resolve(__dirname, 'src', 'index.html')
		}),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        // new GhPagesWebpackPlugin({
        //     path: './public',
        //     options: {
        //         message: 'Update Home Page',
        //         user: {
        //             name: 'Artem170298',
        //             email: 'stepanov.artem.1998@mail.ru'
        //         }
        //     }
        // })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader, 
                        options: {
                            
                        },
                    }, 
                    'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader, 
                        options: {
                            
                        },
                    }, 
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
					}
				}
            },
          
            {
                test: /\.(jpg|png|gif|svg)$/,
				use: ['file-loader']
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: ['file-loader']
            }
        ]
    }
}