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

/**
 * Comme vous l'avez sûrement remarqué, cette chatbox est une
 * "contrefaçon" de MSN, la * nav ici ne sert absolument à rien,
 * sauf a imiter l'interface du programme au maximum... ;)
 */
const Nav = () => (
  <nav className="nav">
    <ul className="nav-ul">
      {/* J'utilise les noms de mes liens importés depuis le fichier nav de data */}
      {links.map(link => (
        <li key={link.id} className="nav-ul-li">{link.lien}</li>
      ))}
    </ul>
  </nav>
);
window.scrollTo(0, 10000);

/**
 * Export
 */
export default Nav;
