let path=require('path');

module.exports={
    entry:["./src/app.js"],
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    mode:"development",
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}