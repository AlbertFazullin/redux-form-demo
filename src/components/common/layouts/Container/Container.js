import React from 'react';
import s from './container.pcss';

export default props => (
  <div className={ s.wrapper }>
    { props.children }
  </div>
);

export const Header = props => (
  <header className={ s.wrapper__header } >
    { props.children }
  </header>
);

export const Content = props => (
  <div className={ s.wrapper__content } >
    { props.children }
  </div>
);

export const Sidebar = props => (
  <div className={ s.wrapper__sidebar } >
    { props.children }
  </div>
);

export const SidebarItem = props => (
  <div className={ s.wrapper__sidebarItem } >
    { props.children }
  </div>
);

export const MainContent = props => (
  <div className={ s.wrapper__main } >
    { props.children }
  </div>
);

export const MainItem = props => (
  <div className={ s.wrapper__mainItem } >
    { props.children }
  </div>
);

export const SearchResults = props => (
  <div className={ s.wrapper__searchResults } >
    { props.children }
  </div>
);

export const Footer = props => (
  <footer className={ s.wrapper__footer }>
    { props.children }
  </footer>
);
