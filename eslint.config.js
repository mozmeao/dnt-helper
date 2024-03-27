/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

'use strict';

const js = require('@eslint/js');
const globals = require('globals');
const eslintConfigPrettier = require('eslint-config-prettier');

const baseRules = {
    // Use type-safe equality operators
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'always'],

    // Treat var statements as if they were block scoped
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    // Disallow Use of alert, confirm, prompt
    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'error',

    // Disallow eval()
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // Disallow empty functions
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': 'error',

    // Require radix parameter
    // https://eslint.org/docs/rules/radix
    radix: 'error',

    // Disallow the use of `console`
    // https://eslint.org/docs/rules/no-console
    'no-console': 'error'
};

const extendedRules = {
    // Require `let` or `const` instead of `var`
    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // Require `const` declarations for variables that are never reassigned after declared
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': 'error'
};

const nodeRules = {
    // Require strict mode directive in global scope
    // https://eslint.org/docs/rules/strict
    strict: ['error', 'global']
};

const testingGlobals = {
    sinon: true
};

module.exports = [
    js.configs.recommended,
    eslintConfigPrettier,
    {
        ignores: ['dist/**/*.js', 'src/package/**/*.js', 'demo/index.js']
    },
    {
        files: ['src/**/*.js', 'demo/**/*.js'],
        languageOptions: {
            sourceType: 'script',
            globals: {
                ...globals.browser,
                ...globals.commonjs
            }
        },
        rules: baseRules
    },
    {
        // JS Jasmine test files.
        files: ['tests/**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...testingGlobals,
                ...globals.browser,
                ...globals.jasmine,
                ...globals.commonjs
            }
        },
        rules: {
            ...baseRules,
            ...extendedRules
        }
    },
    {
        // JS build files for local dev.
        files: [
            'eslint.config.js',
            'webpack.config.js',
            'webpack.demo.config.js'
        ],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'script',
            globals: {
                ...globals.node,
                ...globals.commonjs
            }
        },
        rules: {
            ...baseRules,
            ...extendedRules,
            ...nodeRules
        }
    }
];
