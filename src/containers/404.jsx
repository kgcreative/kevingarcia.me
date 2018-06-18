import React from 'react'
import { withRouteData, Head } from 'react-static';
import SiteHeader from 'components/SiteHeader'

import styles from './404.block.css'
//

export default withRouteData(() => (
  <React.Fragment>
    <Head>
      <title>Four oh Four | Kevin Garcia</title>
    </Head>
    <SiteHeader />
    <main className={styles} aria-labelledby="#page-title">
      <h1 id="page-title">404 - Oh noes! We couldn't find that page :(</h1>
    </main>
  </React.Fragment>
))
