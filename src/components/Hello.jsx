import React, { Component } from 'react'
import styles from './Hello.block.css'
import logoImg from '../assets/logo.png'

class Hello extends Component {
  render () {
    return (
      <React.Fragment>
        <h1 className={styles.title}>Welcome to</h1>
        <img src={logoImg} alt="" className={styles.image} />
        <p className={styles.text}>{this.props.greeting}</p>
      </React.Fragment>
    )
  }
}

export default Hello
