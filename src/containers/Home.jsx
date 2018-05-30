import React from 'react'
import { withSiteData, withRouteData } from 'react-static'
import styles from './Home.block.css'
import Hello from '../components/Hello'


export default withRouteData(() => (
  <main className={styles}>
    <Hello />
  </main>
))
