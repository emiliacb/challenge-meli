const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  const env = dotenv.config().parsed;
  const isProduction = process.env.NODE_ENV === "production";

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.js",
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 4000,
      historyApiFallback: true,
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] },
        },
        {
          test: /\.s(a|c)ss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot|png|jpe?g|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "assets/",
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        atoms: path.resolve(__dirname, "src/components/atoms/"),
        molecules: path.resolve(__dirname, "src/components/molecules/"),
        organisms: path.resolve(__dirname, "src/components/organisms/"),
        pages: path.resolve(__dirname, "src/pages/"),
        styles: path.resolve(__dirname, "src/styles/"),
        images: path.resolve(__dirname, "src/images/"),
        utils: path.resolve(__dirname, "src/utils/"),
      },
      extensions: ["scss", ".js", ".jsx"],
    },
    optimization: {
      splitChunks: {
        // include all types of chunks
        chunks: "all",
      },
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
      }),
    ],
  };
};
