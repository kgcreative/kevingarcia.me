import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import bannerImg from '../../assets/sfw-landing-page.png'
import sfwUserFlowImg from '../../assets/sfw-user-flow.png'
import sfwScrollBehaviorImg from '../../assets/sfw-scroll-behavior.png'
import sfwRedundantSpaceImg from '../../assets/sfw-redundant-space.png'
import sfwAppWrapperImg from '../../assets/sfw-app-wrapper.png'
import sfwSearchRemovedImg from '../../assets/sfw-search-removed.png'
import sfwNewProblemsImg from '../../assets/sfw-new-problems.png'
import sfwMovingSearchToBottomImg from '../../assets/sfw-moving-search-to-bottom.png'
import sfwSearchDetailsImg from '../../assets/sfw-search-details.png'
import sfwRefinedGroupSearchImg from '../../assets/sfw-refined-group-search.png'
import sfwRefinedDetailPage from '../../assets/sfw-refined-detail-page.png'

import styles from './SeafoodWatch.block.css'

export default withRouteData(() => (
  <main className={styles} aria-labelledby="#page-title">
    <Head>
      <title>Seafood Watch | Portfolio | Kevin Garcia</title>
    </Head>
    <section className={styles.section}>
      <h1 id="page-title">Refining the SeafoodWatch search experience</h1>
      <p>The initial SeafoodWatch search app was a success, but we were noticing a few usability issues with the search experience. This was an exploration that led to refinements to the search experience.</p>
    </section>
    <figure className={styles.banner}>
      <picture className={styles.banner__picture}>
        <img className={styles.banner__picture__img} src={bannerImg} alt="SeafoodWatch landing page" />
      </picture>
    </figure>
    <section className={styles.section}>
      <h2>Exploring the problem</h2>
      <p>The project manager further explained that users find the search being anchored to the top of the recommendation after a seafood has been selected confusing, and requested we change the way the page offers the user to ‘search again’.</p>
      <p><strong>Existing behavior:</strong> Landing on the group overview, group of recommendations, or the final recommendation, the page automatically scrolls the user down so that only part of the page is visible.</p>
      <p>This is problematic, because on a slow browser or connection, this results in the page automatically scrolling the user down to a waypoint after the user has begun orienting themselves in the page. This disrupts the user as they are starting to explore the page.</p>
      <p>Furthermore, when browsing with fast connections/browsers, the scroll happens almost instantly, resulting in the user not having a context cue that they can scroll up to return to search.</p>
    </section>
    <div className={styles.featured}>
      <img className={styles.featuredImg} src={sfwScrollBehaviorImg} alt="Almost as soon as you land, the seafood watch app scrolled you past the title" />
    </div>
    <section className={styles.section}>
      <p>Additionally, this creates a large area of wasted space at the top that we are either scrolling past, or that contains redundant information. Expecting the user to know, without any context cues, that they can scroll back up in order to get back to search can also cause confusion.</p>
    </section>
    <div className={styles.featured}>
      <img className={styles.featuredImg} src={sfwRedundantSpaceImg} alt="illustration of wasted and redundant space" />
    </div>
    <section className={styles.section}>
      <h2>Further analysis</h2>
      <p>The Seafood Watch Recommendation Search App is masked within the structure of the Seafood Watch website, and I think this is where some of the confusion and redundancy starts to set in. The app itself, has a consistent experience.</p>
    </section>
    <div className={styles.featured}>
      <img className={styles.featuredImg} src={sfwAppWrapperImg} alt="Wireframes revealing app structure" />
    </div>
    <section className={styles.section}>
      <p>When we look at the app in context with the website, we start seeing both redundancies and inconsistencies.</p>
      <p>The user flow starts at “Seafood Recommendations”,  “Seafood Search”, or “Sushi”, (depending on where you start your search) to “Tuna Overview” (in the instance where there is a group with a description)—or “Tuna Recommendations” (In the instance where there isn’t), then “Tuna, Albacore”</p>
      <p>This is repeated again in the title either above, to the right, or below the picture of the fish, with a slightly different variation. “Tuna”,  “Tuna / All Recommendations for Tuna” and “Tuna, Albacore”</p>
    </section>
    <div className={styles.featured}>
      <img src={sfwUserFlowImg} className={styles.featuredImg} alt="Seafood Watch App pages illustrating user flow" />
    </div>
    <section className={styles.section}>
      <p>Removing the search component and the scrolling behavior from the top of the app, this issue becomes even more visible because of the proximity of the headlines to each other.</p>
    </section>
    <div className={styles.featured}>
      <img src={sfwSearchRemovedImg} className={styles.featuredImg} alt="Removing search highlights redundancy issues" />
    </div>
    <section className={styles.section}>
      <p>A possible solution is to brand the entire experience “Recommendation Search” - Which then allows it to stay consistent to the Seafood watch branding, and allowing the app give the user context cues for where they are. This highlights a few new problems.</p>
    </section>
    <div className={styles.featured}>
      <img className={styles.featuredImg} src={sfwNewProblemsImg} alt="Removing search highlights redundancy issues" />
    </div>
    <section className={styles.section}>
      <p>The Group overview page has no information beyond a description, and a call to action to go view the recommendations. In the instances where the user lands on a group page, they, have to actively click to get to the Recommendations page that lists them all and allows you to drill down to a single recommendation. Furthermore, having removed the search bar from the top, there is no clear way to navigate within the app itself. You can easily go from Group-&gt;Recommendations-&gt;Individual recommendation, but there is no obvious path to backtrack or search again, beyond going back up to primary navigation.</p>
    </section>
    <section className={styles.section}>
      <h2>Exploring solutions</h2>
      <h3>Moving search to the bottom</h3>
      <p>This is the simplest solution the requires the least ammount of refactoring. It also leaves the current experience mostly intact.</p>
    </section>
    <div className={styles.featured}>
      <img className={styles.featuredImg}src={sfwMovingSearchToBottomImg} alt="Moving search to bottom has its own challenges" />
    </div>
    <section className={styles.section}>
      <dl>
        <dt>Advantages</dt><dd>This is the least disruptive option in terms of user experience and technology refactoring. By moving the search to the bottom, we also “unbury it” from the scrolling behavior, and it gives our users the ability to search again if the screen they landed on is the wrong one.</dd>
        <dt>Disadvantages</dt><dd>None of the other consistency issues are addressed. Having the search at the bottom disrupts the existing experience, and users may abandon the page before they reach it.
      </dd></dl>
      <h3>Moving search to the sidebar</h3>
      <p>This would require significant refactoring of the entire experience, primarily because the only place where there is a sidebar that could have an integrated search is in the multple recommendation overview page. Both the Group Overview, and the Individual Recommendation are designed as a single column display. This approach allows us to address a few other issues.</p>
    </section>
    <div className={styles.featured}>
      <img className={styles.featuredImg}src={sfwSearchDetailsImg} alt="Moving search to sidebar is preferable" />
    </div>
    <section className={styles.section}>
      <dl>
        <dt>Advantages</dt>
        <dd>This approach allows us to remove the “group” page alltogether, and combine it into the recommendation search. When available, the Group information should be presented together with the recommendations in the recommendation search. Finally, we can bring the sidebar back into the individual reccomendation page, giving us a space to search again, or return to the recommendation results for that type of fish. This approach fixes a lot of the consistency issues we’ve explored, and also allows us to simplify and streamline the search experience.</dd>
        <dt>Disadvantages</dt>
        <dd>This is a broader fix that requires more resources than what may be available short term.</dd>
      </dl>
    </section>
    <section className={styles.section}>
      <h3>Refining the experience</h3>
      <p>Redesigning the “Group” layout allows us to leverage the existing information and populate the group recommendations, while also allowing us to surface more information to the “Refine your search” experience.</p>
    </section>
    <div className={styles.featured}>
      <img className={styles.featuredImg}src={sfwRefinedGroupSearchImg} alt="Refining the group search experience" />
    </div>
    <section className={styles.section}>
      <p>Finally, the individiual result layout also allows us to introduce a place to either return to the recommendation results, or to search again within the app.</p>
    </section>
    <div className={styles.featured}>
      <img className={styles.featuredImg} src={sfwRefinedDetailPage} alt="Refined detail page" />
    </div>
  </main>
))
