import React, { Component } from 'react'
import { Link } from 'react-static'

import styles from './NavMenu.block.css'

class NavMenu extends Component {
  render () {
    return (
      <nav className={styles}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/about" className={styles.link}>About</Link>
        <Link to="/blog" className={styles.link}>Blog</Link>
      </nav>
    )
  }
}

export default NavMenu
