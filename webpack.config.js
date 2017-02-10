var webpack = require('webpack');
var path = require('path');
// var NpmInstallPlugin = require('npm-install-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new NpmInstallPlugin()
    ],

    module: {

        preLoaders: [
            {
                test: /\.js$/,
                loaders: ['eslint'],
                include: [
                    path.resolve(__dirname, "src"),
                ],
            }
        ],

        loaders: [
            {
                loaders: ['react-hot', 'babel-loader'],
                include: [
                    path.resolve(__dirname, "src"),
                ],
                test: /\.js$/,
                plugins: ['transform-runtime'],
            },

            { test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
               loader: 'url-loader?limit=100000' },

      // {
      //   test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
      //   loader: 'file'
      // },
            {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },

      // {
      //     test: /\.png$|\.jpg$|\.gif$/,
      //     loader: 'file?name=public/[name].[ext]',
      //   }
        ]
    },

    postcss: function () {
    return [autoprefixer, precss];
}

}
