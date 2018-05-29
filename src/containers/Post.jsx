import React from 'react'
import { withRouteData, Link } from 'react-static'
import styles from './Posts.block.css'
//

export default withRouteData(({ post }) => (
  <main className={styles}>
    <Link exact to="/blog/" className={styles.breadcrumb}>{'<'} Back</Link>
    <br />
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </main>
))
