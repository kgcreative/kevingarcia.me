
import React from 'react'
import { withRouteData, Head, Link } from 'react-static'
import ResumeJob from '../components/ResumeJob'

import styles from './Resume.block.css'

export default withRouteData(() => (
  <main className={styles} aria-labelledby="#page-title">
    <Head>
      <title>R&egrave;sum&egrave; | Kevin Garcia</title>
    </Head>
    <h1 id="page-title">R&egrave;sum&egrave;</h1>
    <section aria-labelledby="#experience">
      <h2 id="#experience" className={styles.experience}>Recent Experience</h2>
      <ResumeJob
        company="Cisco Jasper"
        companyURL="http://www.jasper.com"
        location="Santa Clara, CA"
        jobTitle="Senior UX Designer"
        employmentDates="September 2017 &mdash; Present">
        <ul>
          <li>Design lead on a variety of product features and new product initiatives</li>
          <li>Improve design tools and resources to speed up the design team and make handoff to engineering easier</li>
          <li>Mentor and train design team members</li>
        </ul>
      </ResumeJob>
      <ResumeJob
        company="Stanford University"
        companyURL="http://www.stanford.edu"
        location="Stanford, CA"
        jobTitle="Front End Designer/Developer"
        employmentDates="February 2016 &mdash; August 2017">
        <ul>
          <li>Built a proof-of-concept microsite for the Presidential Inauguration</li>
          <li>This became the basis of for <Link to='https://github.com/SU-SWS/decanter'>Decanter</Link>, an open-source scss framework which powers the main Stanford Website, the redesigned Identity Site, and the next generation of Drupal Sites built by Stanford Web Services</li>
          <li>Using Decanter, built the front-end for the <Link to='http://muledesign.com/2017/07/a-fresh-face-for-the-farm'>redesigned</Link> <Link to='https://www.stanford.edu'>Stanford.edu</Link> and <Link to='https://identity.stanford.edu/beta'>Identity Toolkit</Link></li>
          <li>Art-directed and built <Link to='http://news.stanford.edu/features/2016/alaska/'>a</Link> <Link to='http://news.stanford.edu/features/2016/slac/'>variety</Link> <Link to='http://news.stanford.edu/2016/06/07/stroll-bowes-art-architecture-library/'>of</Link> <Link to='http://news.stanford.edu/2016/08/24/election-2016/'>digital</Link> <Link to='http://news.stanford.edu/2016/12/20/meet-stanford-faculty/'>storytelling</Link> <Link to='http://news.stanford.edu/2016/06/20/entrepreneurship-at-stanford/'>packages</Link> for <Link to='http://news.stanford.edu'>Stanford News</Link></li>
          <li>Core member of the UX Community of Practice, where we share best practices, institutional knowledge and share resources with our peer UX practitioners</li>
        </ul>
      </ResumeJob>
      <ResumeJob
        company="Monterey Bay Aquarium"
        companyURL="http://www.montereybayaquarium.org"
        location="Monterey, CA"
        jobTitle="Front End Designer"
        employmentDates="April 2013 &mdash; February 2016">
        <ul>
          <li><Link to="http://www.montereybayaquarium.org/styleguide/grid-marionette">Extended</Link> and <Link to="http://www.montereybayaquarium.org/styleguide/item-grid">added</Link> to the <Link to="http://www.montereybayaquarium.org/styleguide/grid-skeleton">class-based front-end framework</Link> of the Monterey Bay Aquarium and Seafood Watch sites to allow for more granular responsive control</li>
          <li>Designed and produceed the Monterey Bay Aquarium E-News, as well as other e-mail and social media campaigns and microsites</li>
        </ul>
      </ResumeJob>
      <ResumeJob
        company="Cal State Monterey Bay"
        companyURL="http://www.csumb.edu"
        location="Monterey, CA"
        jobTitle="Art Director"
        employmentDates="December 2008 &mdash; April 2013">
        <p><strong>Branding &amp; Art Direction:</strong></p>
        <ul>
          <li>Shaped and defined the graphic elements of brand identity at both the master brand and sub-brand levels, while managing the associated digital assets</li>
          <li>Provided expertise in the development and evaluation of effective communication design strategies</li>
          <li>Provided lead art direction to other staff designers, student assistants and interns</li>
        </ul>
        <p><strong>Web:</strong></p>
        <ul>
          <li>Provided art-direction for the redesign of CSUMB.EDU, including site architecture for department subsites, at both template and sub-site levels</li>
          <li>Assisted in building and maintaining style sheets, protocols and workflow within an enterprise-wide CMS</li>
          <li>Conducted weekly and on-call training and assistance for campus users</li>
          <li>Advised and assisted management on the development of overall web and social media policies, procedures and standards</li>
        </ul>
        <p><strong>Print:</strong></p>
        <ul>
          <li>Art Directed print publications such as catalogs, event invitations, booklets, newsletters, posters, flyers, brochures and other university collateral materials</li>
          <li>Maintained the university photo, media and asset library</li>
        </ul>
        <p><strong>Photography: </strong></p>
        <ul>
          <li>Provided Event, environmental and portrait photography services</li>
        </ul>
      </ResumeJob>
    </section>
  </main>
))
