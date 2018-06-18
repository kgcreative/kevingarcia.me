
import React from 'react'
import { withRouteData, Head, Link } from 'react-static'
import SiteHeader from 'components/SiteHeader'
import styles from './Colophon.block.css'
//

export default withRouteData(() => (
  <React.Fragment>
    <Head>
      <title>Colophon | Kevin Garcia</title>
    </Head>
    <SiteHeader />
    <main className={styles} aria-labelledby="#page-title">
      <h1 id="page-title">Colophon</h1>
      <p className={styles.pilcrow}>&para;</p>
      <p>This site was built<br /> as a learning experience<br /> using <Link to="https://react-static.js.org/">React Static</Link> and <span class="keep-together"><Link to="http://css-blocks.com">CSS Blocks</Link>.</span></p>
      <p className={styles.section}>&sect;</p>
    </main>
  </React.Fragment>
))
