var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');
module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'productHunt.js',
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    devServer: {
        port: 3333,
        historyApiFallback: true,
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : './public/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
}
