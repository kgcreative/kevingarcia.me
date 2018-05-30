import React from 'react'
import { Router, Link, Head } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import NavMenu from './components/NavMenu'

// These have to be imported here for css blocks to find them.
// I'm not sure what that does to the webpack output.
//
// In theory we can add a way to provide additional entry points to css blocks 
// that aren't part of webpack.
//
// or maybe there's a way to get react-static and webpack's entry points
// better aligned than they are by default?
import F04 from './containers/404.jsx'
import About from './containers/About.jsx'
import Blog from './containers/Blog.jsx'
import Home from './containers/Home.jsx'
import Post from './containers/Post.jsx'

import styles from './app.scss'

const App = () => (
  <React.Fragment>
    <Head>
        <title>React Static with CSS Blocks</title>
        <link rel="preload" href="/css-blocks.css" as="style" />
        <link rel="stylesheet" href="/css-blocks.css" />
    </Head>
    <Router>
      <React.Fragment>
        <header>
          <NavMenu />
        </header>
        <Routes />
      </React.Fragment>
    </Router>
  </React.Fragment>
)

export default hot(module)(App)
