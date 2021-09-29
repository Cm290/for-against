const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { lstatSync, readdirSync } = require('fs');
const source = path.resolve(__dirname, 'src/components');
const isDirectory = source => lstatSync(source).isDirectory();
const dirs = readdirSync(source).map(name => path.join(source, name)).filter(isDirectory);

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    }
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
          },
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
          },
        },
      ],
    },
    {
      test: /\.hbs$/,
      use: [{
          loader: 'handlebars-loader',
          options: {
              partialDirs: [path.resolve(__dirname, 'src/'), ...dirs],
              helperDirs: path.join(__dirname, 'bin/helpers'),
          }
      }]
    },
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      meta: {
        'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'charset':"utf-8"
      },
      template: path.resolve(__dirname, "src", "index.hbs")
     }),
  ]
};