var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './components/index.jsx' // Your appʼs entry point
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                //exclude: path.join(__dirname, 'node_modules'),
                include: path.join(__dirname, 'components'),
                loader: 'react-hot!babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                //exclude: path.join(__dirname, 'node_modules'),
                include: path.join(__dirname, 'components'),
                loader: 'react-hot!babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map'
}