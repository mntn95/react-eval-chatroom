/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Component


// Style
import './nav.sass';
import links from 'src/data/nav';
/**
 * Code
 */
const Nav = () => (
  <nav className="nav">
    <ul className="nav-ul">
      {links.map(link => (
        <li key={link.id} className="nav-ul-li">{link.lien}</li>
      ))}
    </ul>
  </nav>
);

/**
 * Export
 */
export default Nav;
