module.exports = {
  mode: 'production', // The three comments below are about mode:
  // 'development' seemed to give a more readable version. 
  // 'production' gives a minimized version
  // 'none' seems like a hybrid. It's weird
  entry: './src/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {test: /\.hbs$/, loader: "handlebars-loader"},
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.csv$/, loader: 'dsv-loader'}
    ]
  }
}