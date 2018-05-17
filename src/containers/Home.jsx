import React from 'react'
import { withSiteData } from 'react-static'
//

import logoImg from '../logo.png'
import Hello from '../components/Hello'

export default withSiteData(() => (
  <React.Fragment>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <img src={logoImg} alt="" />
    <Hello />
  </React.Fragment>
))
