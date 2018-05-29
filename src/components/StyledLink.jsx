import React, { Component } from 'react'
import styles from './StyledLink.block.css'
import { withRouteData, Link } from 'react-static'

class StyledLink extends Component {
  render () {
    return (
      <Link {this.props.exact && exact} to={this.props.to} {this.props.className && className} />
    )
  }
}

export default StyledLink