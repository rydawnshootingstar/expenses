const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules:  [{
            loader: 'babel-loader',
            //only when a file meets this regex criteria will we mess with them
            //exclude node_modules for obvious reasons
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            use: ['style-loader', 'css-loader', 'sass-loader'],
            test: /\.s?css$/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }

};
