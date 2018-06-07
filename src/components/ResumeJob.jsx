import React, { Component } from 'react'
import { Link } from 'react-static'

import styles from './ResumeJob.block.css'
import HideVisually from './HideVisually'

class ResumeJob extends Component {
  render () {
    const company = this.props.company
    const companyURL = this.props.companyURL
    const location = this.props.location
    const jobTitle = this.props.jobTitle
    const employmentDates = this.props.employmentDates
    const children = this.props.children

    return (
      <div className={styles}>
        <hr className={styles.divider} />
        <div className={styles.meta}>
          <p className={styles.location}><HideVisually>Location: </HideVisually>{location}</p>
          <p className={styles.dates}><HideVisually>Dates Employed: </HideVisually>{employmentDates}</p>
        </div>
        <div className={styles.details}>
          <h4 className={styles.title}><HideVisually>Title: </HideVisually>{jobTitle}</h4>
          <p className={styles.company}><HideVisually>Company Name: </HideVisually><Link to={companyURL}>{company}</Link></p>
          <div className={styles.description}>{children}</div>
        </div>
      </div>
    )
  }
}

export default ResumeJob
