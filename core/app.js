/**
 * React Static Boilerplate
 * https://github.com/zanjs/generator-react-sta
 *
 * Copyright © 2015-2016 Julian (@zanjs)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel-polyfill';
import 'whatwg-fetch';
import { createApp } from 'react-app';
import store from './store';
import routes from '../routes';

createApp({
  routes,
  context: { store },
  container: document.getElementById('container'),
});

// if (module.hot) {
//   module.hot.accept(() => {
//     createApp({
//       routes,
//       context: { store },
//       container: document.getElementById('container'),
//     });
//   });
// }
