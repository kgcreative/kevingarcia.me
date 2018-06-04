
import React from 'react'
import { withRouteData, Head } from 'react-static'
import ResumeJob from '../components/ResumeJob'

import styles from './Resume.block.css'

export default withRouteData(() => (
  <main className={styles} aria-labelledby="#page-title">
    <Head>
      <title>Rèsumè | Kevin Garcia</title>
    </Head>
    <h1 id="page-title">Rèsumè</h1>
    <section aria-labelledby="#experience">
      <h2 id="#experience" className={styles.experience}>Recent Experience</h2>
      <ResumeJob />
    </section>
  </main>
))
