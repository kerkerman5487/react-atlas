webpack           = require('webpack')
pkg               = require './package.json'
ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (config) ->
  config.set
    browsers        : ['PhantomJS']
    singleRun       : true
    frameworks      : ['mocha']
    files           : ['./node_modules/phantomjs-polyfill/bind-polyfill.js',
                       './node_modules/react/dist/react-with-addons.js',
                       'tests.webpack.js']
    reporters       : ['dots']

    preprocessors:
      'tests.webpack.js' : ['webpack']

    webpack:
      resolve       : extensions: ['', '.cjsx', '.coffee', '.js', '.json', '.styl']

      module:
        loaders: [
          test      : /\.cjsx$/,    loader: 'coffee-jsx-loader'
        ,
          test      : /\.coffee$/,  loader: 'coffee-jsx-loader'
        ,
          test      : /\.styl$/,    loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]!stylus-loader')
        ]

      watch         : true

      plugins: [ new ExtractTextPlugin pkg.name + '.[name].css', allChunks: false ]

    webpackServer:
      noInfo        : true
