import React from 'react'
import { withRouteData, Head } from 'react-static'
import SiteHeader from 'components/SiteHeader'
import styles from './About.block.css'

export default withRouteData(() => (
  <React.Fragment>
    <Head>
      <title>About | Kevin Garcia</title>
    </Head>
    <SiteHeader />
    <main className={styles} aria-labelledby="#page-title">
      <h1 id="page-title">Hello!</h1>
      <p>I'm a senior user experience designer at <a href="https://www.jasper.com/">Cisco Jasper</a>, where I bring user-centered design approaches to solve enterprise-scale IOT management problems.</p>
      <p>Some of my past work includes:</p>
      <ul>
        <li>Building the Front-End for the 2017 redesign of the <a href="https://www.stanford.edu">Stanford University Homepage</a>, the <a href="http://identity.stanford.edu/">Stanford Identity Tooklit</a>, and the building blocks for the design system that powers both the homepage, news, and many Stanford subsites.</li>
        <li><a href="http://news.stanford.edu/features/2016/alaska/">a</a> <a href="http://news.stanford.edu/features/2016/slac/">number</a> <a href="http://news.stanford.edu/2016/06/07/stroll-bowes-art-architecture-library/">of </a> <a href="http://news.stanford.edu/2016/08/24/election-2016/">digital</a> <a href="http://news.stanford.edu/2016/12/20/meet-stanford-faculty/">storytelling</a> <a href="http://news.stanford.edu/2016/06/20/entrepreneurship-at-stanford/">packages</a> for <a href="http://news.stanford.edu">Stanford News</a>.</li>
        <li>A focus on <a href="https://ux.stanford.edu/">UX</a>, design systems, and <a href="https://github.com/SU-SWS/decanter">front-end frameworks</a> at Stanford University's office of <a href="https://ucomm.stanford.edu/#web-communications">Web Communications</a>.</li>
        <li>Web, e-mail, and marketing design at the <a href="http://www.montereybayaquarium.org">Monterey Bay Aquarium</a></li>
        <li>Art Direction, Branding and Marketing at <a href="http://www.csumb.edu">Cal State Monterey Bay</a></li>
      </ul>
    </main>
  </React.Fragment>
))
