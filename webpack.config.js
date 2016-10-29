module.exports = {
  entry: {
    app:'./app/app.js',
    drag:'./app/drag_bootstrap'
  },
  output: {
    filename: 'dist/[name]-bundle.js'
  },
  resolve: {
    extensions: [ '.js', '.jsx', '']
  },
  watch :true,
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015'
      }
    ]
  }
};