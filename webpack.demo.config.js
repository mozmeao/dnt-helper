const path = require('path');

module.exports = {
    entry: '../src/mozilla-dnt-helper.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'demo'),
        library: {
            name: 'dntHelper',
            type: 'umd'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    performance: {
        hints: 'warning'
    },
    optimization: {
        minimize: false
    }
}
