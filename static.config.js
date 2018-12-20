import { reloadRoutes } from 'react-static/node'
// import jdown from 'jdown'
// import chokidar from 'chokidar'

import ExtractTextPlugin from 'extract-text-webpack-plugin'
import React from 'react'

// Import CSS Blocks Plugin, Analyzer & Rewriter
const { resolveConfiguration } = require('@css-blocks/core')
const { Rewriter, Analyzer } = require('@css-blocks/jsx')
const { CssBlocksPlugin } = require('@css-blocks/webpack')
const cssBlocksRewriter = require('@css-blocks/jsx/dist/src/transformer/babel')

// chokidar.watch('content').on('all', () => reloadRoutes());

export default {
  siteRoot: 'https://www.kevingarcia.me/',
  preact: 'true',
  getSiteData: () => ({
    title: 'React Static with CSS Blocks',
  }),
  getRoutes: async () => {
    // const { posts } = await jdown('content')
    return [
      {
        path: '/',
        component: './src/containers/About',
      },
      {
        path: '/portfolio',
        component: './src/containers/Portfolio',
      },
      {
        path: '/portfolio/stanford-redesign',
        component: './src/containers/portfolio/StanfordRedesign',
      },
      {
        path: '/portfolio/seafood-watch',
        component: './src/containers/portfolio/SeafoodWatch',
      },
      {
        path: '/portfolio/control-center',
        component: './src/containers/portfolio/ControlCenter',
      },
      {
        path: '/resume',
        component: './src/containers/Resume',
      },
      {
        path: '/colophon',
        component: './src/containers/Colophon',
      },
      {
        is404: true,
        component: './src/containers/404',
      },
    ]
  },
  Document: ({
    Html, Head, Body, children,
  }) => (
    // Instance custom html document
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        {children}
      </Body>
    </Html>
  ),

  // ————————————————————————————————————————————————————————————————
  // Webpack Configuration

  webpack: (config, { defaultLoaders, stage }) => {
    // Configure CSS Blocks Compilation, rewriter & analyzer options
    const jsxCompilationOptions = {
      compilationOptions: resolveConfiguration({

      }),
      optimization: {
        enabled: stage !== 'dev',
        rewriteIdents: true,
        mergeDeclarations: true,
        removeUnusedStyles: true,
        conflictResolution: true,
      },
    }
    const rewriter = new Rewriter()
    const analyzer = new Analyzer('./src/index.js', jsxCompilationOptions)
    let loaders

    defaultLoaders.cssLoader.exclude = /\.block\..*$/

    loaders = [
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          minimize: stage === 'prod',
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader',
        options: { includePaths: ['src/'] },
      },
    ]

    if (stage !== 'node') {
      if (stage === 'dev') {
        // Hot reload CSS changes during develop
        loaders = ['extracted-loader'].concat(ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          use: loaders,
        }))
      } else {
        // Don't extract css to file during node build process
        loaders = ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              sourceMap: false,
            },
          },
          use: loaders,
        })
      }
    }

    const jsxLoader = {
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ["env", "react", "stage-2"],
            cacheDirectory: stage !== 'prod',
            compact: true,
            plugins: [
              cssBlocksRewriter.makePlugin({ rewriter }),
            ],
            parserOpts: {
              plugins: ['jsx'],
            },
          },
        },
        {
          loader: require.resolve('@css-blocks/webpack/dist/src/loader'),
          options: {
            analyzer,
            rewriter,
          },
        },
      ],
    }

    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            exclude: [
              /\.block\..*$/,
            ],
            use: loaders,
          },
          defaultLoaders.cssLoader,
          jsxLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]

    config.plugins.push(new CssBlocksPlugin({
      analyzer,
      outputCssFile: 'css-blocks.css',
      compilationOptions: jsxCompilationOptions.compilationOptions,
      optimization: jsxCompilationOptions.optimization,
    }))

    // By conditionally calling this only on `stage===dev`, we avoid
    // having double style exports in stage & production builds. I suspect
    // this is because react-static build stages include this by default?
    if (stage === 'dev') {
      config.plugins.push(new ExtractTextPlugin('base-styles.css'))
    }

    return config
  },
}
