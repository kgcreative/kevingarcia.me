import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import SiteHeader from 'components/SiteHeader'

import stanfordImg from '../assets/stanford-landing.jpg'
import sfwImg from '../assets/sfw-landing-page.png'
import ccImg from '../assets/cc_automation_history_versions.png'

import styles from './Portfolio.block.css'

export default withRouteData(() => (
  <React.Fragment>
    <Head>
      <title>Portfolio | Kevin Garcia</title>
    </Head>
    <SiteHeader />
    <main className={styles} aria-labelledby="#page-title">
      <h1 id="page-title">Portfolio</h1>
      <section className={styles.portfolioGrid}>
        <div className={styles.portfolioItem}><Link to="portfolio/stanford-redesign" className={styles.wrapper}><img src={stanfordImg} className={styles.portfolioImg} alt="" /></Link><Link to="portfolio/stanford-redesign" className={styles.link}>Stanford.edu Redesign</Link></div>
        <div className={styles.portfolioItem}><Link to="portfolio/seafood-watch" className={styles.wrapper}><img src={sfwImg} className={styles.portfolioImg} alt="" /></Link><Link to="portfolio/seafood-watch" className={styles.link}>Seafood Watch web app</Link></div>
        <div className={styles.portfolioItem}><Link to="portfolio/control-center" className={styles.wrapper}><img src={ccImg} className={styles.portfolioImg} alt="" /></Link><Link to="portfolio/control-center" className={styles.link}>IOT Control Center</Link></div>
      </section>
    </main>
  </React.Fragment>
))
