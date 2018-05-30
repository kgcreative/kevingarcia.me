import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
//

export default withRouteData(({ posts }) => (
  <main>
    <Head>
      <title>Blog | React Static with CSS Blocks</title>
    </Head>
    <h1>It’s blog time.</h1>
    <br />
    All Posts:
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </main>
))
