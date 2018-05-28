import React, { Component } from 'react'
import styles from './Hello.block.css'
import logoImg from '../assets/logo.png'
import cssBlocksLogo from '../assets/css-blocks.svg'

class Hello extends Component {
  render () {
    return (
      <React.Fragment>
        <h1 className={styles.title}>Welcome to</h1>
        <img src={logoImg} alt="" className={styles.image} />
        <p className={styles.text}>plus</p>
        <img src={cssBlocksLogo} alt="" className={styles.image} />
      </React.Fragment>
    )
  }
}

export default Hello
