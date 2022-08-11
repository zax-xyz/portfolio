const webpack = require("webpack");
const path = require("path");

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.pdf$/,
          loader: "file-loader",
          options: {
            name: "[name].[hash:8].[ext]",
          },
        },
      ],
    },
  },
  chainWebpack: config => {
    config
      .plugin("html")
      .tap(args => [{ ...args[0], title: "Michael Vo · Frontend Software Engineer" }]);

    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/colors.scss";
        `,
      },
    },
  },
};
