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
        <Link
          activeClassName="header__nav__item--active"
          className="header__nav__item"
          to={constants.URL.LIST}
        >
          Home
        </Link>
        <Link
          activeClassName="header__nav__item--active"
          className="header__nav__item"
          to={constants.URL.AUTHOR}
        >
          AUTHOR
        </Link>
      </nav>
    </div>
  </header>
);


export default MainHeader;
