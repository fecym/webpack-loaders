const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  mode: 'development',
  resolveLoader: {
    modules: [path.resolve('node_modules'), path.resolve(__dirname, 'loaders')]
  },
  devtool: 'source-map',
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [
      //         '@babel/preset-env'
      //       ]
      //     }
      //   }
      // }
      {
        test: /\.js$/,
        use: {
          loader: 'banner-loader',
          options: {
            text: '/** make in 2020-05-02 by chengyuming **/',
            filename: 'name.txt'
            // text: 1
          }
        }
      }
    ]
  }
}