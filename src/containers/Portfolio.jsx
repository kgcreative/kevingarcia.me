import React from 'react'
import { withRouteData, Link, Head } from 'react-static'

import styles from './Portfolio.block.css'

export default withRouteData(({ posts }) => (
  <main className={styles} aria-labelledby="#portfolio">
    <Head>
      <title>Portfolio | Kevin Garcia</title>
    </Head>
    <h1 id="portfolio">Portfolio</h1>
    <br />
  </main>
))
