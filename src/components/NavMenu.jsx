import React, { Component } from 'react'
import { Link } from 'react-static'

import styles from './NavMenu.block.css'

class NavMenu extends Component {
  render () {
    return (
      <nav className={styles}>
        <Link exact to="/" className={styles.link}>Home</Link>
        <Link exact to="/about" className={styles.link}>About</Link>
        <Link exact to="/blog" className={styles.link}>Blog</Link>
      </nav>
    )
  }
}

export default NavMenu
