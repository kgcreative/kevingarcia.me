import React, { Component } from 'react'
import styles from './PrintOnly.block.css'

class PrintOnly extends Component {
  render () {
    const children = this.props.children
    const span = this.props.span

    if (span) {
      return (
        <span className={styles}>{children}</span>
      )
    } return (
      <div className={styles}>{children}</div>
    )
  }
}

export default PrintOnly
