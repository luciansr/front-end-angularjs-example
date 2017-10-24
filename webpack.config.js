const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// assets.js
const Assets = require('./webpack.assets');

module.exports = {
    entry: {
        app: "./src/app/app.module.js",
    },
    output: {
        path: __dirname + "/src/bundle/",
        filename: "[name].bundle.js"
    },
    plugins: [
      new CopyWebpackPlugin(
        Assets.map(asset => {
          return {
            from: path.resolve(__dirname, `./node_modules/${asset}`),
            to: path.resolve(__dirname, './src/libs')
          };
        })
      )
    ]
};