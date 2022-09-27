const path = require('path')

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port:3010,
        static: path.resolve(__dirname, 'src'),
        open: true,
        hot: true
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                exclude: /node_modules/,
                use: ['file-loader']
            }
        ]
    }
}