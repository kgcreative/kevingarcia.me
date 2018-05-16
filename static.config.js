import axios from 'axios'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

// Import CSS Blocks Plugin, Analyzer & Rewriter
const { Rewriter, Analyzer } = require('@css-blocks/jsx')
const { CssBlocksPlugin } = require('@css-blocks/webpack')
const cssBlocksRewriter = require('@css-blocks/jsx/dist/src/transformer/babel')

// Configure CSS Blocks Compilation, rewriter & analyzer options
const jsxCompilationOptions = {
  compilationOptions: {},
  optimization: {
    rewriteIdents: true,
    mergeDeclarations: true,
    removeUnusedStyles: true,
    conflictResolution: true,
  },
}
const rewriter = new Rewriter()
const analyzer = new Analyzer('./src/index.js', jsxCompilationOptions)

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
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
      {
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
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  webpack: (config, { defaultLoaders, stage }) => {
    config.module.rules = [
      {
        oneOf: [
          defaultLoaders.cssLoader,
          {
            test: /\.s(a|c)ss$/,
            use:
              stage === 'dev'
                ? [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
                : ExtractTextPlugin.extract({
                  use: [
                    {
                      loader: 'css-loader',
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: false,
                      },
                    },
                    {
                      loader: 'sass-loader',
                      options: { includePaths: ['src/'] },
                    },
                  ],
                }),
          },
          defaultLoaders.fileLoader,
          defaultLoaders.jsLoader,
          {
            test: /\.js(x?)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: require.resolve('babel-loader'),
                options: {
                  presets: ["env", "react", "stage-2"],
                  cacheDirectory: true,
                  compact: true,
                },
              },
              {
                loader: require.resolve('babel-loader'),
                options: {
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
          },
        ],
      },
    ]
    config.plugins.push(new CssBlocksPlugin({
      analyzer,
      outputCssFile: 'bundle.css',
      compilationOptions: jsxCompilationOptions.compilationOptions,
      optimization: jsxCompilationOptions.optimization,
    }))
    return config
  },
}
