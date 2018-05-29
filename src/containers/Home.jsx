import React from 'react'
import { withSiteData } from 'react-static'
import styles from './Home.block.css'
import Hello from '../components/Hello'


export default withSiteData(() => (
  <main className={styles}>
    <Hello />
  </main>
))
