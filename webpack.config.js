/*
"devDependencies": {
  "babel-core": "^6.24.0",
  "babel-loader": "^6.4.1",
  "babel-preset-es2015": "^6.24.0",
  "babel-preset-react": "^6.23.0",
  "babel-preset-stage-0": "^6.22.0",
  "react": "^15.4.2",
  "react-dom": "^15.4.2",
  "react-hot-loader": "^1.3.1",
  "react-router": "^3.0.0",
  "webpack": "^2.3.2",
  "webpack-dev-server": "^2.4.2"
}
*/

var path = require('path');
var webpack = require('webpack');
// 'react-hot-loader',
module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/', 'webpack/hot/only-dev-server', './src'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
        // , publicPath: path.resolve(__dirname, 'public')
    },
    resolve: {
        modules: [
            'node_modules', 'src', 'src/components', 'styles'
        ],
        extensions: [
            '.js', '.jsx'
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: ['react-hot-loader', 'babel-loader?presets[]=babel-preset-react,presets[]=babel-preset-es2015,presets[]=babel-preset-stage-0']
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'})
    ],
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/'
    }
};
