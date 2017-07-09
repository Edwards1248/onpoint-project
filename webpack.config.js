const path = require('path');

const config = {
  entry: "./app/assets/scripts/app.js",
  output: {
    path: path.resolve("./app/temp", 'build'),
    filename: "App.js"
  },
  module: {
    loaders: [
    {
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      },
      test: /\.js$/,
      exclude: /node_modules/
      }
    ]
  }
}

module.exports = config;