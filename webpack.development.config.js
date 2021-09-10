const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "/src/index.js",
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      utils: path.resolve(__dirname, './src/utils'),
      assets: path.resolve(__dirname, './src/assets')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist")
  },
  mode: 'development',
  devServer: {
    port: 8000, 
    static: {
      directory: path.resolve(__dirname, './dist') 
    },
    devMiddleware: { 
      index: 'index.html', 
      writeToDisk: true
    } 
  },
  module: {
    rules: [
      {
        test: /\.(png|jpeg|gif)$/,
        type: 'asset/resource' 
      },
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'] 
      },
      {
        test: /\.scss$/, 
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      favicon: "./src/assets/shisho.png"
    }),
    new CleanWebpackPlugin()
  ]
};
