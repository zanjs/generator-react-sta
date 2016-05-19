/**
 * React Static Boilerplate
 * https://github.com/zanjs/generator-react-sta
 *
 * Copyright © 2015-2016  Julian (@zanjs)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { Content } from '../../components';

export default {

  path: '/about',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        try {
          const content = require('./index.md');
          resolve({
            title: content.title,
            component: Content,
            props: content,
          });
        } catch (err) {
          reject(err);
        }
      });
    });
  },

};
