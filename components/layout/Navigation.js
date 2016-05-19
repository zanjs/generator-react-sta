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
import { Link } from 'react-app';
import s from './Layout.css';

class Navigation extends React.Component {

  // componentDidMount() {
  //   window.componentHandler.upgradeElement(this.refs.root);
  // }

  // componentWillUnmount() {
  //   window.componentHandler.downgradeElements(this.refs.root);
  // }

  render() {
    return (
      <nav className={s.navWp} ref="root">
        <Link className={s.navWpa} to="/">Home</Link>
        <Link className={s.navWpa} to="/about">About</Link>
        <Link className={s.navWpa} to="/not-found">Not Found</Link>
      </nav>
    );
  }

}

export default Navigation;
