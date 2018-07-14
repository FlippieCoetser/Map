const path = require('path');
module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'map.js',
    path: path.resolve(__dirname, 'lib/'),
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
        configFile: 'typescript.Package.json'
      }
    }]
  },
  externals: {
    d3: 'd3'
  },
  devtool: 'inline-source-map',
  target: 'web',
  watch: true
};
