import React, { Component } from 'react'
import { Link } from 'react-static'

import styles from './ResumeJob.block.css'
import HideVisually from './HideVisually'

class ResumeJob extends Component {
  render () {
    const organizationName = this.props.organizationName
    const organizationURL = this.props.organizationURL
    const location = this.props.location
    const jobTitle = this.props.jobTitle
    const employmentDates = this.props.employmentDates
    const startDate = this.props.startDate
    const endDate = this.props.endDate
    const children = this.props.children

    return (
      <div className={styles}>
        { jobTitle && (
          <h3 className={styles.title}><HideVisually>Title: </HideVisually>{jobTitle}</h3>
        ) }
        { organizationName && (
          <p className={styles.organizationName}><HideVisually>Organization Name: </HideVisually>
            { organizationURL ? (
              <Link to={organizationURL} className={styles.organizationURL}>{organizationName}</Link>
            ) :
              <React.Fragment>{organizationName}</React.Fragment>}
          </p>
        )}
        <div className={styles.meta}>
          { location && (
            <p className={styles.location}><HideVisually>Location: </HideVisually>{location}</p>
          ) }
          { employmentDates && (
            <p className={styles.dates}>
              <HideVisually>Dates Employed: </HideVisually>
              {employmentDates}
            </p>
          ) }
          { startDate && (
            <p className={styles.dates}>
              <HideVisually>Dates Employed: </HideVisually>
              {startDate} { endDate && ( <React.Fragment> &ndash; {endDate}</React.Fragment> ) }
            </p>
          )}
        </div>
        { children && (
          <div className={styles.details}>{children}</div>
        )}
      </div>
    )
  }
}
export default ResumeJob
