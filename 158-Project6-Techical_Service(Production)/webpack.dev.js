const path = require('path');
const common=require('./webpack.common');
const {merge}=require('webpack-merge');

module.exports = merge(common,{
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 9000,
        contentBase: path.resolve(__dirname, 'dist'), //içerik bilgisi
        watchContentBase: true,
        open: true
    }
});
