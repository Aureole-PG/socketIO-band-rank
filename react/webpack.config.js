const html = require('html-webpack-plugin')
module.exports={
    mode: "production",
    output:{
        filename: 'app.bundle.js'
    },
    plugins:[
        new html({
            template: 'src/index.html'
        })
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    performance: { hints: false },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}