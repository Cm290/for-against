const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HandlebarsPlugin = require("handlebars-webpack-plugin");

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
    }]
  },
  devtool: "source-map", // any "source-map"-like devtool is possible
  module: {
    rules: [{
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
    }],
  },
  plugins: [
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), "src", "*.hbs"),
      output: path.join(process.cwd(), "dist", "[name].html"),

      // data: require("./app/data/project.json"),
      // data: path.join(__dirname, "app/data/project.json"),
      partials: [
        path.join(process.cwd(), "src", "components", "*", "*.hbs")
      ],
 
      // helpers: {
      //   nameOfHbsHelper: Function.prototype,
      //   projectHelpers: path.join(__dirname, "helpers", "*.helper.js")
      // },
 
      // hooks
      // getTargetFilepath: function (filepath, outputTemplate) {},
      // getPartialId: function (filePath) {}
      // onBeforeSetup: function (Handlebars) {},
      // onBeforeAddPartials: function (Handlebars, partialsMap) {},
      // onBeforeCompile: function (Handlebars, templateContent) {},
      // onBeforeRender: function (Handlebars, data, filename) {},
      // onBeforeSave: function (Handlebars, resultHtml, filename) {},
      // onDone: function (Handlebars, filename) {}
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.hbs")
     }),
  ]
};