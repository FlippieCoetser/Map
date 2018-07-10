const path = require('path');
module.exports = {
  entry: './src/events.ts',
  output: {
    filename: 'map.js',
    path: path.resolve(__dirname, 'lib/browser'),
    library: 'Map'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [{
      test: /\.ts$/, 
      loader: 'ts-loader',
      options: {
        configFile: 'typescript.browser.json'
      }
    }]
  },
  devtool: 'inline-source-map',
  target: 'web',
  watch: true
};
