import React from 'react';
import { Link, IndexLink } from 'react-router';

import constants from '../../Constants';

const MainHeader = () => (
  <header className="header">
    <div className="header__inner">
      <div className="header__logo">
        <h1>
          <IndexLink className="header__logo__title" to={constants.URL.MAIN} >
            SPA Treatment
          </IndexLink>
        </h1>
      </div>

      <nav className="header__nav">
        <Link className="header__nav__item" to={constants.URL.MAIN}>Home</Link>
        <Link className="header__nav__item" to={constants.URL.DETAIL}>Something</Link>
        <Link className="header__nav__item" to={constants.URL.AUTHOR}>About</Link>
      </nav>
    </div>
  </header>
);


export default MainHeader;
