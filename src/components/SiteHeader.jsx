import React, { Component } from 'react'
import { Link } from 'react-static'
import NavMenu from './NavMenu'
import styles from './SiteHeader.block.css'

class SiteHeader extends Component {
  render () {
    return (
      <header className={styles}>
        <h2 className={styles.title}><Link exact to="/" className={styles.link}>Kevin Garcia</Link></h2>
        <NavMenu />
      </header>
    )
  }
}

export default SiteHeader
