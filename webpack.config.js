const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '../Portfolio'),
        filename: 'index_bundle.js'
    },
    devServer : {
        inline: true,
        port: 3000
    },
    module: {
        rules: [
            {
               test: /\.jsx?$/,
               exclude: /node_modules/,
               loader: 'babel-loader',
               query: {
                  presets: ['env', 'react']
               }
            },
            {
                test: /\.scss?$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
         ]
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}