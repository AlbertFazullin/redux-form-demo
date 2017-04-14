import React from 'react';
import { IndexLink, Link } from 'react-router';
import s from './menu.pcss';

const Menu = () =>
  <div className={ s.wrapper }>
    <div className={ s.logo }>Crafted</div>
    <div className={ s.links }>
      <IndexLink to="/" activeClassName={ s.active }>Index</IndexLink>
      <Link to="/step-1" activeClassName={ s.active }>Step 1</Link>
      <Link to="/step-2" activeClassName={ s.active }>Step 2</Link>
    </div>
  </div>;

export default Menu;
