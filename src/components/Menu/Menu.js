import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import { IndexLink, Link } from 'react-router';
import s from './menu.pcss';

const Menu = () =>
  <div>
    <LoadingBar style={{ backgroundColor: '#40ab7b', height: '2px', position: 'absolute' }} />
    <div className={ s.wrapper }>
      <div className={ s.logo }>Crafted</div>
      <div className={ s.links }>
        <IndexLink to="/" activeClassName={ s.active }>Index</IndexLink>
        <Link to="/step-1" activeClassName={ s.active }>Step 1</Link>
        <Link to="/step-2" activeClassName={ s.active }>Step 2</Link>
        <Link to="/step-3" activeClassName={ s.active }>Step 3</Link>
      </div>
    </div>
  </div>;

export default Menu;
