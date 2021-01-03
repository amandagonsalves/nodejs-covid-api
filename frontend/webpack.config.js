const { join } = require('path');

module.exports = {
  entry: [
    join(__dirname, './src/index.js'),
  ],
  output: {
    path: join(__dirname, './public'),
    filename: './app.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public',
    historyApiFallback: true
  },

  resolve: {
    extensions: [
      '.js', '.scss', '.css', '.ts', '.tsx', '.jsx', '.json'
    ],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.woff|.woff2|.ttf|.jpg|.png|.eot|.svg*.*$/,
        use: 'file-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
}