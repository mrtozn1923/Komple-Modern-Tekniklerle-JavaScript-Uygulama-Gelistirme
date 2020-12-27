const path = require('path');

module.exports = {
    entry: ["regenerator-runtime/runtime", "./src/app.js"],
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
    }
};
