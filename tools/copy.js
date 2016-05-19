/**
 * React Static Boilerplate
 * https://github.com/zanjs/generator-react-sta
 *
 * Copyright © 2015-2016 zanjs Tarkus (@zanjs)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const cpy = require('cpy');
const task = require('./task');

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
module.exports = task('copy', cpy(['static/**/*.*'], 'build'));
