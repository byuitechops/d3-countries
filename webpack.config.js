module.exports = {
  mode:'production',
  entry:'./src/script.js',
  output:{
    filename:'bundle.js',
    path:__dirname+'/dist'
  },
  module:{
    rules:[
      { test: /\.hbs$/, loader: "handlebars-loader" },
      { test: /\.js$/, loader:'babel-loader', exclude: /node_modules/ },
      { test: /\.csv$/, loader:'dsv-loader' }
    ]
  }
}