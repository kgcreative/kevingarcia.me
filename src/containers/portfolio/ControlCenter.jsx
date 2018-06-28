import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import SiteHeader from 'components/SiteHeader'

import versionHistory from '../../assets/cc_automation_history_versions.png'
import emailNotification from '../../assets/cc_automation_email.png'
import initialToolbar from '../../assets/cc-toolbar-initial.png'
import redesignedToolbar from '../../assets/cc-toolbar-redesigned.png'

import styles from './ControlCenter.block.css'

export default withRouteData(() => (
  <React.Fragment>
    <SiteHeader />
    <main className={styles} aria-labelledby="#page-title">
      <Head>
        <title>Cisco Jasper | Portfolio | Kevin Garcia</title>
      </Head>
      <section className={styles.section}>
        <h1 id="page-title">IOT Control Center</h1>
        <p>Cisco Jasper's Flagship product, Control Center, allows for the management, provisioning, and control of IOT devices. My role as a Senior UX Designer puts me in contact with many aspects of the product.</p>
      </section>
      <section className={styles.section}>
        <h2>Version History Audit Tool</h2>
        <p>When auditing automation rules, our support administrators expressed frustrations with our existing audit trail, which made it a challenge to determine quickly which fields had changed</p>
        <p>Working closely with PM, I designed a version comparison tool that would, given any two versions, highlight the deltas between them. This made it easy to not only see the changes between successive versions, but compare the state of two versions that were several steps removed from each other.</p>
        <p>Additional flows to restore a version, and to edit the current version were also designed in order to allow superadmins quick access to trouble shoot or create a new version from within the comparison tool.</p>
      </section>
      <picture className={styles.featured}>
        <img src={versionHistory} className={styles.featuredImg} alt="Screenshot of Control Center showing versioning screen" />
      </picture>
      <section className={styles.section}>
        <h2>Email Notification Frequency</h2>
        <p>This was a remedial fix after a misconfigured email notification crashed several of our Clients' email servers. The original notification sent an email notification each time a device triggered a rule, and a cascading condition caused several thousand devices to hit the threshold within a short period of each other.</p>
        <p>The short-term fix is to change the default automation rule notification frequency from once every time a device rule is triggered, to once per day.</p>
        <p>Additional work went to design aggregate email notifications, rule summaries and other supplemental flows, not shown here due to NDA</p>
      </section>
      <picture className={styles.featured}>
        <img src={emailNotification} className={styles.featuredImg} alt="Screenshot of Control Center a portion of the Email Notification configuration" />
      </picture>
      <section className={styles.section}>
        <h2>Toolbar Improvements</h2>
        <p>Over the 10 year lifespan of the product, the toobar in the workhorse grid pages had slowly acquired new features and actions.</p>
        <p>This resulted in heavy cognitive load and difficulty scanning. An audit of all the different places where the grid displayed, showed between twelve and eighteen average decision points by the time our users reached the first line of data.</p>
        <p>Attempts in the past to address the toobar included adding icons to each of the actions to help differentiate between discrete actions, and to provide some visual separators. This resulted in an even more crowded toolbar</p>
        <p>Our first step was to define a problem statement that would guide us through the rest of the project. In the case of this update, our guiding principle was "Our User needs to <strong>efficiently</strong> perform actions when it's <strong>relevant</strong>"</p>
      </section>
      <picture className={styles.featured}>
        <img src={initialToolbar} className={styles.featuredImg} alt="Control Center Toolbar Analysis" />
      </picture>
      <section className={styles.section}>
        <p>By just reducing the toolbar icons from a horizontal list to a vertical list, we substantially reduce the cognitive load while minimizing horizontal scanning.</p>
        <p>Changing the actions from a horizontal list to a vertical list also removes the need for iconography as separators.</p>
        <p>Continuing to iterate, grouping Export with Refresh removes another decision point and helps visually group those actions. This reduces the number of decisions to a manageable level</p>
        <p>The final result is a more streamlined toolbar that gives our users access to a more scannable set of actions when it's relevant, allowing them to perform their day-to-day tasks more quickly.</p>
      </section>
      <picture className={styles.featured}>
        <img src={redesignedToolbar} className={styles.featuredImg} alt="Control Center Toolbar Redesign" />
      </picture>
      <br />
    </main>
  </React.Fragment>
));
