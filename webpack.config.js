
module.exports = {
  entry: {
    popup: "./popup.js",
    content: "./content_script.js"
  },
  output: {
   path: "./dist",
   filename: "[name]-bundle.js",
   sourceMapFilename: "[name]-bundle.js.map",
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
