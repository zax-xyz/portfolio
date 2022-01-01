const webpack = require("webpack");
const path = require("path");

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.pdf$/,
          use: "file-loader",
        },
      ],
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          stylus: {
            import: [path.resolve(__dirname, "./src/assets/stylus/colors.styl")],
          },
        },
      }),
    ],
  },
  chainWebpack: config => {
    config
      .plugin("html")
      .tap(args => [{ ...args[0], title: "Michael Vo · Frontend Software Engineer" }]);
  },
};
