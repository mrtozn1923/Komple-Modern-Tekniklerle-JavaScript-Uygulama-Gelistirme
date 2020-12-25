const path = require('path');

module.exports = {
    entry: ["regenerator-runtime/runtime", "./src/app.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    },
    devServer: {
        port: 9000,
        contentBase: path.resolve(__dirname, 'dist'), //içerik bilgisi
        watchContentBase: true,
        open: true
    }
};
//--------------
/*
path.resolve('/a', 'b', 'c');     //    C:\a\b\c
path.resolve('/a', '/b', 'c');    //    C:\b\c
path.resolve('/a', '/b', '/c');   //    C:\c

path.join('/a', '/b', '/c');   //   \a\b\c
path.join('/a', '/b', 'c');    //   \a\b\c
path.join('/a', 'b', 'c');     //   \a\b\c
path.join('a', 'b', 'c');      //   \a\b\c
*/