import React, { Component } from 'react'
import { Link } from 'react-static'

import styles from './NavMenu.block.css'

class NavMenu extends Component {
  render () {
    return (
      <nav className={styles}>
        <Link exact to="/" className={styles.link} activeClassName="current">About</Link>
        <Link to="/portfolio" className={styles.link} activeClassName="current">Portfolio</Link>
        <Link exact to="/resume" className={styles.link} activeClassName="current">Resume</Link>
        <Link to="/colophon" className={styles.link} activeClassName="current">Colophon</Link>
      </nav>
    )
  }
}

export default NavMenu
