
module.exports = {
  entry: "./index.js",
  output: {
   path: "./",
   filename: "bundle.js",
   sourceMapFilename: "bundle.js.map",
 },
 devtool: 'source-map',
 module: {
  loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015']
      }
    }]
  }
}
