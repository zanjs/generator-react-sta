/**
 * React Static Boilerplate
 * https://github.com/zanjs/generator-react-sta
 *
 * Copyright © 2015-2016 zanjs Tarkus (@zanjs)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const task = require('./task');

module.exports = task('build', () => Promise.resolve()
  .then(() => require('./clean'))
  .then(() => require('./copy'))
  .then(() => require('./bundle'))
);
