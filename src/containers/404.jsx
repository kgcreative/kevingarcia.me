import React from 'react'
import { withRouteData, Head } from 'react-static';

import styles from './404.block.css'
//

export default withRouteData(() => (
  <main className={styles} aria-labelledby="#page-title">
    <Head>
      <title>Four oh Four | Kevin Garcia</title>
    </Head>
    <h1 id="page-title">404 - Oh no's! We couldn't find that page :(</h1>
  </main>
))
