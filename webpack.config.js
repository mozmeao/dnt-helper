/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

'use strict';

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const version = require('./package.json').version;

module.exports = {
    entry: './src/mozilla-dnt-helper.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
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
    },
    plugins: [
        // clean out dist/ before building
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/package/package.json'),
                    transform: function (content) {
                        return JSON.stringify(
                            JSON.parse(content, (key, value) =>
                                key === 'version' ? version : value
                            ),
                            null,
                            4
                        );
                    }
                },
                {
                    from: path.resolve(__dirname, 'README.md')
                },
                {
                    from: path.resolve(__dirname, 'LICENSE')
                }
            ]
        })
    ]
};
