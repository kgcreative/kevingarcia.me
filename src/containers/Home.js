import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'
import Hello from '../components/Hello'

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <img src={logoImg} alt="" />
    <Hello />
  </div>
))
