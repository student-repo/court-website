var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        contentBase: './src',
        port: 8080,
        historyApiFallback: true,
        hot: true
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.jsx',
    resolve: {
        extensions: ['', '.scss', '.css', '.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            },
        ]
    },
    // module: {
    //     loaders: [
    //         {
    //             test: /\.js$/,
    //             loaders: ['babel'],
    //             exclude: /node_modules/
    //         },
    //         {
    //             test: /\.scss/,
    //             loader: 'style-loader!css-loader!sass-loader'
    //         }
    //     ]
    // },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
