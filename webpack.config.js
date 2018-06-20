module.exports = {
  mode: 'development', // The three comments below are about mode:
  // 'development' seemed to give a more readable version. 
  // 'production' gives a minimized version
  // 'none' defaults to development
  entry: './src/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [{
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.csv$/,
        loader: 'dsv-loader'
      }
    ]
  }
}