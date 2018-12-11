const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env)=> {
    const isProduction = env === 'production';

    return {
        // optimization: {
        //     splitChunks: {
        //       cacheGroups: {
        //         styles: {
        //           name: 'styles',
        //           test: /\.s?css$/,
        //           chunks: 'all',
        //           enforce: true
        //         }
        //       }
        //     }
        //   },
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
            test: /\.s?css$/,
            use: [
                //MiniCssExtractPlugin.loader
                'style-loader',{
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            }, {
                loader:'sass-loader',
                options: {
                    sourceMap: true
                }
            }],

        }]
    },
    // plugins: [
    //     new MiniCssExtractPlugin({
    //       filename: "styles.css",
    //     })
    //   ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
    }
}