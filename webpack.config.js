const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('lodash');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
        ],
    },
    plugins:[new HtmlWebpackPlugin({
        template:"./template.html"
    })]
};
