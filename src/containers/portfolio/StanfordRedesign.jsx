import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import SiteHeader from 'components/SiteHeader'
import bannerImg from '../../assets/stanford-landing.jpg'
import responsiveChallenge from '../../assets/responsive-challenge.png'

import styles from './StanfordRedesign.block.css'

export default withRouteData(() => (
  <React.Fragment>
    <Head>
      <title>Stanford Redesign | Portfolio | Kevin Garcia</title>
    </Head>
    <SiteHeader />
    <main className={styles} aria-labelledby="#page-title">
      <section className={styles.section}>
        <h1 id="page-title">Stanford.edu Redesign</h1>
        <p>We teamed up with <a href="http://muledesign.com">Mule Design</a> to redesign Stanford's main website, <a href="http://www.stanford.edu">Stanford.edu</a>. For more details about the process and their role in the project, you can refer to the <a href="http://muledesign.com/2017/07/a-fresh-face-for-the-farm">excellent write-up</a> on their site.</p>
      </section>
      <figure className={styles.full_width__thin__figure}>
        <picture className={styles.full_width__thin__figure__picture}>
          <img className={styles.full_width__thin__figure__picture__img} src={bannerImg} alt="Stanford's main landing page, with the Stanford University Logo" />
        </picture>
      </figure>
      <section className={styles.curtainReveal}>
        <br />
        <h2>The Curtain Reveal</h2>
        <p>I used the <a href="http://imakewebthings.com/waypoints/">waypoints.js</a> library to choreograph multiple scroll waypoints to achieve the curtain reveal effect.</p>
        <p>As the user scrolls, the Wordmark first fades from the splash image, then reappears in the brand bar. Further down, the bottom navigation menu sticks to the brand bar, and finally, the curtain locks into place and the rest of the page scrolls along with it.</p>
        <p>The biggest challenge here was ensuring the animations happened smoothly and felt natural.</p>
        <div className={styles.wrapper6x4}>
          <iframe className={styles.video} src="https://player.vimeo.com/video/226708001?autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0" width="620" height="413" frameBorder="0" allowFullScreen=""></iframe>
        </div>
      </section>
      <section className={styles.section}>
        <br />
        <h2>Responsive Layout Challenge</h2>
        <p>It's important that our homepage feels like it's designed for whatever device you happen to access it with.</p>
        <p>Mule delivered us excellent desktop and mobile mockups, but I wanted to ensure the in-between sizes got some extra attention as well.</p>
        <p>This involved experimenting with layout and finding several variations that would still treat the featured story as special, while maintaining content hierarchy and filling the available space gracefully.</p>
      </section>
      <figure className={styles.responsiveChallengeFig}>
        <img src={responsiveChallenge} className={styles.responsiveChallengeImg} alt="Multiple breakpoints allow the layout to maintain hierarchy while filling available space" />
      </figure>
      <section className={styles.microInteractions}>
        <br />
        <h2>Micro interactions</h2>
        <p>Often times, it's the details that make a site feel finished. We spent some time making sure hover effects felt natural, adding meaningful interactions, and dialing animations back to where they felt unobtrusive.</p>
        <p>For the stanford report form, we spent some extra time making sure the labels were accessible, and that meaningful labels appeared when inside the text field.</p>
        <div className={styles.wrapper7x4}>
            <iframe className={styles.video} src="https://player.vimeo.com/video/226710378?autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0" width="620" height="343" frameBorder="0" allowFullScreen=""></iframe>
        </div>
        <p><br />A challenge was differentiating "Story cards" from "Highlights". We used motion and content hierarchy to do this. For story cards, the image and the link both go to the same place, while for highlights, the image is illustrative, and the link is treated differently.</p>
        <div className={styles.StoryHighlights}>
          <div>
            <div className={styles.wrapper16x9}>
              <iframe className={styles.video} src="https://player.vimeo.com/video/226712268?autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0" width="620" height="343" frameBorder="0" allowFullScreen=""></iframe>
            </div>
          </div>
          <div>
            <div className={styles.wrapper16x9}>
              <iframe className={styles.video} src="https://player.vimeo.com/video/226712270?autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0" width="620" height="343" frameBorder="0" allowFullScreen=""></iframe>
            </div>
          </div>
        </div>
        <p><br />Another fun microinteraction is the hover effect for the navigation menu. Getting the timing to feel natural was a challenge, especially since it's easy to go overboard and get in the user's way.</p>
        <div className={styles.wrapper16x9}>
          <iframe className={styles.video} src="https://player.vimeo.com/video/226712261?autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0" width="620" height="343" frameBorder="0" allowFullScreen=""></iframe>
        </div>
      </section>
    </main>
  </React.Fragment>
))
