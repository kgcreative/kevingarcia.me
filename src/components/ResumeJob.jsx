import React, { Component } from 'react'
import { Link } from 'react-static'

import styles from './ResumeJob.block.css'

class ResumeJob extends Component {
  render () {
    return (
      <div className={styles}>
        <hr className={styles.divider} />
        <div className={styles.meta}>
          <p className={styles.location}><span className={styles.hideVisually}>Location: </span>Santa Clara, CA</p>
          <p className={styles.dates}><span className={styles.hideVisually}>Dates Employed: </span>September 2017 – Present</p>
        </div>
        <div className={styles.details}>
          <h4 className={styles.title}><span className={styles.hideVisually}>Title: </span>Senior UX Designer</h4>
          <p className={styles.company}><span className={styles.hideVisually}>Company Name: </span><Link to="http://www.jasperwireless.com">Cisco Jasper</Link></p>
          <div className={styles.description}> <ul> <li>Design lead on a variety of product features and new product initiatives</li> <li>Improve design tools and resources to speed up the design team and make handoff to engineering easier</li> <li>Mentor and train design team members</li> </ul></div>
        </div>
      </div>
    )
  }
}

export default ResumeJob
