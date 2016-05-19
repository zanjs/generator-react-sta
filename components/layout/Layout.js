/**
 * React Static Boilerplate
 * https://github.com/zanjs/generator-react-sta
 *
 * Copyright © 2015-2016 Julian (@zanjs)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Header from './Header';
import s from './Layout.css';

class Layout extends React.Component {

  // componentDidMount() {
  //   window.componentHandler.upgradeElement(this.refs.root);
  // }

  // componentWillUnmount() {
  //   window.componentHandler.downgradeElements(this.refs.root);
  // }

  render() {
    return (
      <div className="layout js-layout" ref="root">
        <div className={s.navs} >
          <Header />
          <main {...this.props} className={s.content} />
        </div>
      </div>
    );
  }
}

export default Layout;
