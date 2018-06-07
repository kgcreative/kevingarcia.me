import React from 'react'
import { withRouteData, Link, Head } from 'react-static'

import styles from './Portfolio.block.css'

export default withRouteData(({ posts }) => (
  <main className={styles} aria-labelledby="#page-title">
    <Head>
      <title>Portfolio | Kevin Garcia</title>
    </Head>
    <h1 id="page-title">Portfolio</h1>
    <br />
  </main>
))
