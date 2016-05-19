/**
 * React Static Boilerplate
 * https://github.com/zanjs/generator-react-sta
 *
 * Copyright © 2015-2016 Julian (@zanjs)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { createStore } from 'redux';

/**
 * Centralized application state
 * See http://redux.js.org/
 */
const store = createStore((state, action) => {
  // TODO: Add action handlers (aka "reduces")
  switch (action) {
    case 'COUNT':
      return { ...state, count: (state.count || 0) + 1 };
    default:
      return state;
  }
});

export default store;
