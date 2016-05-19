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
import Navigation from './Navigation';
import s from './Layout.css';

class Header extends React.Component {

  // componentDidMount() {
  //   window.componentHandler.upgradeElement(this.refs.root);
  // }

  // componentWillUnmount() {
  //   window.componentHandler.downgradeElements(this.refs.root);
  // }

  render() {
    return (
      <header className={s.layout__header} ref="root">
        <div className={s.layout__header_row}>
          <span className="layout-title">React Static Boilerplate</span>
          <div className="layout-spacer"></div>
          <Navigation />
        </div>
      </header>
    );
  }

}

export default Header;
