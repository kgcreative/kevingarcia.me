import React from 'react'
import { withRouteData, Link, Head } from 'react-static'

import stanfordImg from '../assets/stanford-landing.jpg'
import sfwImg from '../assets/sfw-landing-page.png'
import ccImg from '../assets/cc_automation_history_versions.png'

import styles from './Portfolio.block.css'

export default withRouteData(() => (
  <main className={styles} aria-labelledby="#page-title">
    <Head>
      <title>Portfolio | Kevin Garcia</title>
    </Head>
    <h1 id="page-title">Portfolio</h1>
    <section className={styles.portfolioGrid}>
      <div className={styles.portfolioItem}><div className={styles.wrapper}><img src={stanfordImg} className={styles.portfolioImg} alt="" /></div><Link to="portfolio/stanford-redesign" className={styles.link}>Stanford.edu Redesign</Link></div>
      <div className={styles.portfolioItem}><div className={styles.wrapper}><img src={sfwImg} className={styles.portfolioImg} alt="" /></div><Link to="portfolio/seafood-watch" className={styles.link}>Seafood Watch web app</Link></div>
      <div className={styles.portfolioItem}><div className={styles.wrapper}><img src={ccImg} className={styles.portfolioImg} alt="" /></div><Link to="portfolio/control-center" className={styles.link}>IOT Control Center</Link></div>
    </section>
  </main>
))
