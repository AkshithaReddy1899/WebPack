const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      title : 'Webpack demo',
      template: './src/index.html'
    }),
  ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};