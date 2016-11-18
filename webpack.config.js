module.exports = {
    entry: ["./utils.js", "./app.js"] ,
    output: {
        filename: "bundle.js"
    },

    module: {
      preLoaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'jshint-loader'
      }
      ],
      loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader"
      },
      ]
    },

    resolve: {
      extensions: ['', '.js']
    }
}