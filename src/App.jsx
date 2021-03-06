import React, { Fragment } from 'react'
import { Router, Head } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

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
import Resume from './containers/Resume.jsx'
import Portfolio from './containers/Portfolio.jsx'
import StanfordRedesign from './containers/portfolio/StanfordRedesign.jsx'
import SeafoodWatch from './containers/portfolio/SeafoodWatch.jsx'
import AutomationAuditTrail from './containers/portfolio/ControlCenter.jsx'
import Colophon from './containers/Colophon.jsx'

import SiteHeader from './components/SiteHeader'
import styles from './base-styles.scss'

const App = () => (
  <Fragment>
    <Head>
      <title>React Static with CSS Blocks</title>
      <link rel="preload" href="/css-blocks.css" as="style" />
      <link rel="stylesheet" href="/css-blocks.css" />
    </Head>
    <Router>
      <Routes />
    </Router>
  </Fragment>
)

export default hot(module)(App)
