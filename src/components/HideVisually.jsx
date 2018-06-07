import React, { Component } from 'react'
import styles from './HideVisually.block.css'

class HideVisually extends Component {
  render () {
    const children = this.props.children
    const block = this.props.block

    if (block) {
      return (
        <div className={styles}>{children}</div>
      )
    } return (
      <span className={styles}>{children}</span>
    )
  }
}

export default HideVisually
