const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Entry point for the application
  entry: './index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
    publicPath: '/', // Public URL of the output when referenced in a browser
  },

  // Module rules
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply to .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules folder
        use: {
          loader: 'babel-loader', // Use Babel to transpile JS/JSX
        },
      },
      {
        test: /\.css$/, // Apply to .css files
        use: ['style-loader', 'css-loader'], // Loaders for CSS files
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Apply to image files
        use: [
          {
            loader: 'file-loader', // Use file-loader for images
            options: {
              name: '[name].[hash].[ext]', // Name pattern for the output files
              outputPath: 'assets/images', // Output directory for images
            },
          },
        ],
      },
    ],
  },

  // Plugins configuration
  plugins: [
    new CleanWebpackPlugin(), // Cleans the dist folder before each build
    new HtmlWebpackPlugin({
      template: './index.html', // Template for generating the final HTML file
      filename: 'index.html', // Name of the output HTML file
    }),
  ],

  // DevServer configuration
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Serve content from this directory
    compress: true, // Enable gzip compression
    port: 9001, // Port number for the dev server
    historyApiFallback: true, // Enables support for HTML5 history API based routing
    hot: true, // Enable hot module replacement
    open: true, // Automatically open the browser on server start
  },

  // Resolve file extensions
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
  },

  // Source maps for easier debugging
  devtool: 'source-map', // Generate source maps for debugging
};