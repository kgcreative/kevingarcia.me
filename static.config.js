// import axios from 'axios'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import React from 'react'

// Import CSS Blocks Plugin, Analyzer & Rewriter
const { resolveConfiguration } = require('@css-blocks/core')
const { Rewriter, Analyzer } = require('@css-blocks/jsx')
const { CssBlocksPlugin } = require('@css-blocks/webpack')
const cssBlocksRewriter = require('@css-blocks/jsx/dist/src/transformer/babel')

export default {
  getSiteData: () => ({
    title: 'React Static with CSS Blocks',
    siteRoot: '/',
  }),
  getRoutes: async () => {
    // const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        title: 'Home',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        title: 'About',
        component: 'src/containers/About',
      },
      /* {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      }, */
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  Document: ({
    Html, Head, Body, children,
  }) => (
    // Instance custom html document with link to css-blocks styles
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/css-blocks.css" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
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

    defaultLoaders.cssLoader.exclude = /\.block\..*$/

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

    if (stage === 'dev') {
      config.plugins.push(new ExtractTextPlugin('style.css'))
    }

    config.plugins.push(new CssBlocksPlugin({
      analyzer,
      outputCssFile: 'css-blocks.css',
      compilationOptions: jsxCompilationOptions.compilationOptions,
      optimization: jsxCompilationOptions.optimization,
    }))

    return config
  },
}
