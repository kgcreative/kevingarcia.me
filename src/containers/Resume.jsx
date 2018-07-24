import React from 'react'
import { withRouteData, Head, Link } from 'react-static'
import SiteHeader from 'components/SiteHeader'
import HideVisually from 'components/HideVisually'
import ResumeJob from '../components/ResumeJob'
import styles from './Resume.block.css'

const jobs = [
  {
    organization: {
      name: 'Cisco Jasper',
      url: 'http://www.jasper.com',
      location: 'Santa Clara, CA',
    },
    title: 'Senior UX Designer',
    startDate: 'September 2017',
    endDate: 'Present',
    responsibilities: '<ul><li>Leverage user, technical account manager and PM feedback to continuously improve our platform\'s Analytics, Automation, Notification and Audit engines.</li><li>Ongoing work to improve design tools, libraries and resources, resulting in increased design team velocity and increased quality of engineering handoffs.</li><li>Mentor and train design team members</li></ul>',
  },
  {
    organization: {
      name: 'Stanford University',
      url: 'http://www.stanford.edu',
      location: 'Stanford, CA',
    },
    title: 'Front End Designer/Developer',
    startDate: 'February 2016',
    endDate: 'August 2017',
    responsibilities: '<ul><li>Built a proof-of-concept microsite for the Presidential Inauguration</li><li>This became the basis of for <a href="https://github.com/SU-SWS/decanter">Decanter</a>, an open-source scss framework which powers the main Stanford Website, the redesigned Identity Site, and the next generation of Drupal Sites built by Stanford Web Services</li><li>The front-end work on the stanford.edu site resulted in new features and extensions to the <a href="http://neat.bourbon.io">Neat</a> open source grid framework</li><li>Using Decanter, built the front-end for the <a href="http://muledesign.com/2017/07/a-fresh-face-for-the-farm">redesigned</a> <a href="https://www.stanford.edu">Stanford.edu</a> and <a href="https://identity.stanford.edu/beta">Identity Toolkit</a></li><li>Art-directed and built <a href="http://news.stanford.edu/features/2016/alaska/">a</a> <a href="http://news.stanford.edu/features/2016/slac/">variety</a> <a href="http://news.stanford.edu/2016/06/07/stroll-bowes-art-architecture-library/">of</a> <a href="http://news.stanford.edu/2016/08/24/election-2016/">digital</a> <a href="http://news.stanford.edu/2016/12/20/meet-stanford-faculty/">storytelling</a> <a href="http://news.stanford.edu/2016/06/20/entrepreneurship-at-stanford/">packages</a> for <a href="http://news.stanford.edu">Stanford News</a></li><li>Core member of the UX Community of Practice, where we share best practices, institutional knowledge and share resources with our peer UX practitioners</li></ul>',
  },
  {
    organization: {
      name: 'Monterey Bay Aquarium',
      url: 'http://www.montereybayaquarium.org',
      location: 'Pacific Grove, CA',
    },
    title: 'Front End Designer',
    startDate: 'April 2013',
    endDate: 'February 2016',
    responsibilities: '<ul><li><a href="http://www.montereybayaquarium.org/styleguide/grid-marionette">Extended</a> and <a href="http://www.montereybayaquarium.org/styleguide/item-grid">added</a> to the class-based <a href="http://www.montereybayaquarium.org/styleguide/grid-skeleton">front-end framework</a> of the Monterey Bay Aquarium and Seafood Watch sites to allow for more granular responsive control</li><li>Designed and produced the Monterey Bay Aquarium E-News, as well as other e-mail and social media campaigns and microsites</li></ul>',
  },
  {
    organization: {
      name: 'Cal State Monterey Bay',
      url: 'http://www.csumb.edu',
      location: 'Seaside, CA',
    },
    title: 'Art Director',
    'startDate': 'December 2008',
    'endDate': 'April 2013',
    responsibilities: '<h4>Branding &amp; Art Direction:</h4><ul><li>Shaped and defined the graphic elements of brand identity at both the master brand and sub-brand levels, while managing the associated digital assets</li><li>Provided expertise in the development and evaluation of effective communication design strategies</li><li>Provided lead art direction to other staff designers, student assistants and interns</li></ul><h4>Web:</h4><ul><li>Provided art-direction for the redesign of csumb.edu, including site architecture for department subsites, at both template and sub-site levels</li><li>Assisted in building and maintaining style sheets, protocols and workflow within an enterprise-wide CMS</li><li>Conducted weekly and on-call training and assistance for campus users</li><li>Advised and assisted management on the development of overall web and social media policies, procedures and standards</li></ul><h4>Print:</h4><ul><li>Art Directed print publications such as catalogs, event invitations, booklets, newsletters, posters, flyers, brochures and other university collateral materials</li><li>Maintained the university photo, media and asset library</li></ul><h4>Photography:</h4><ul><li>Provided Event, environmental and portrait photography services</li></ul>',
  },
]

export default withRouteData(() => (
  <React.Fragment>
    <Head>
      <title>R&egrave;sum&egrave; | Kevin Garcia</title>
    </Head>
    <SiteHeader />
    <main className={styles} aria-labelledby="#page-title">
      <h1 id="page-title">R&egrave;sum&egrave;</h1>
      <section aria-labelledby="#experience" className={styles.experience}>
        <h2 id="#experience" className={styles.sectionTitle}>Recent Experience</h2>
        {jobs.map((job, index) => (
          <ResumeJob key={index}
            organizationName={job.organization.name}
            organizationURL={job.organization.url}
            location={job.organization.location}
            jobTitle={job.title}
            startDate={job.startDate}
            endDate={job.endDate}>
            <div className={styles.responsibilities} dangerouslySetInnerHTML={{ __html: job.responsibilities }} />
          </ResumeJob>
        ))}
      </section>
      <section aria-labelledby="#education" className={styles.education}>
        <h2 id="#education" className={styles.sectionTitle}>Education</h2>
        <div className={styles.resumeDegree}>
          <h3 className={styles.degree}><HideVisually>Degree: </HideVisually>B.A. Visual Art</h3>
          <p className={styles.organizationName}><HideVisually>College: </HideVisually>
            <Link to="http://www.andrews.edu" className={styles.organizationURL}>Andrews University</Link>
          </p>
          <div className={styles.meta}>
            <p className={styles.location}><HideVisually>Location: </HideVisually>Berrien Springs, MI</p>
            <p className={styles.dates}><HideVisually>Graduation Date: </HideVisually>December 2006</p>
          </div>
          <div className={styles.details}>Empahis on Graphic Design, Photography, Media Arts and Journalism</div>
        </div>
      </section>
      <section aria-labelledby="#open-source" className={styles.contributions}>
        <h2 id="#open-source" className={styles.sectionTitle}>Contributions to Open Source</h2>
        <p>Whenever I use a framework, library or project, I look to not just consume the project, but make meaningful contributions where appropriate. The projects below are some where I've either found gaps in features, improved methods or ways to simplify functions, updated documentation in places where I tripped up or felt the docs were unclear, or added features I wished existed in the core projects.</p>
        <ul className={styles.contributionList}>
          <li className={styles.contributionList__item}><Link to="https://github.com/thoughtbot/neat/commits?author=kgcreative">Bourbon Neat</Link></li>
          <li className={styles.contributionList__item}><Link to="https://www.npmjs.com/package/neat-omega">Neat Omega</Link></li>
          <li className={styles.contributionList__item}><Link to="https://github.com/nozzle/react-static/commits?author=kgcreative">React-static</Link></li>
          <li className={styles.contributionList__item}><Link to="https://github.com/jakob-e/unitconversion/commits?author=kgcreative">unitconversion</Link></li>
          <li className={styles.contributionList__item}><Link to="https://github.com/SU-SWS/decanter/commits?author=kgcreative">Decanter</Link></li>
        </ul>
      </section>
    </main>
  </React.Fragment>
))
