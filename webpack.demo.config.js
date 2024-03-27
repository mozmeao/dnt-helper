/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

'use strict';

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
};
