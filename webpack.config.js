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
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'less-loader']
      },
      {
        test: /\.(jpg|gif)$/,
        // use: 'file-loader'
        use: {
          loader: 'url-loader',
          options: {
            limit: 20 * 1024 * 2014
          }
        }
      },
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'banner-loader',
      //     options: {
      //       text: '/** make in 2020-05-02 by chengyuming **/',
      //       filename: 'name.txt'
      //     }
      //   }
      // }
    ]
  }
}