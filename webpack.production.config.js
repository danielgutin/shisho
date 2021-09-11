const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "/src/index.js",
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, "dist")
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      utils: path.resolve(__dirname, './src/utils'),
      assets: path.resolve(__dirname, './src/assets')
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ] 
      },
      {
        test: /\.scss$/, 
        use: [
          MiniCssExtractPlugin.loader,
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
      favicon: "./src/assets/shisho.png",
      meta: { 
        viewport: 'width=device-width, initial-scale=1' 
      }
    }),
    new MiniCssExtractPlugin({ 
      filename: 'styles.[contenthash].css' 
    }),
    new CleanWebpackPlugin()
  ]
};
