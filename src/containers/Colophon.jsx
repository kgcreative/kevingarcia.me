
import React from 'react'
import { withRouteData, Head } from 'react-static'
import styles from './Colophon.block.css'
//

export default withRouteData(() => (
  <main className={styles} aria-labelledby="#colophon">
    <Head>
      <title>Colophon | Kevin Garcia</title>
    </Head>
    <h1 id="colophon">Colophon</h1>
    <p className={styles.section}>§</p>
    <p>This site was built<br /> over a sleep-deprived weekend<br /> using <a href="http://https://react-static.js.org/">React Static</a> and <span class="keep-together"><a href="http://css-blocks.com">CSS Blocks</a>.</span></p>
    <p className={styles.paragraph}>¶</p>
  </main>
))
