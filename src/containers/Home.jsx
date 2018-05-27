import React from 'react'
import { withSiteData } from 'react-static'
//
import Hello from '../components/Hello'

export default withSiteData(() => (
  <React.Fragment>
    <Hello greeting="Hello, and welcome to react-static with CSS blocks!" />
  </React.Fragment>
))
