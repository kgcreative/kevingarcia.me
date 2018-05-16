import React, { Component } from 'react'
import styles from './Hello.block.css'

class Hello extends Component {
  render () {
    return (
      <p className={styles}>Hello, humans</p>
    )
  }
}

export default Hello
