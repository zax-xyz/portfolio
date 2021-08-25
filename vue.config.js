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
  },
  chainWebpack: config => {
    config
      .plugin("html")
      .tap(args => [{ ...args[0], title: "Michael Vo · Frontend Software Engineer" }]);
  },
};
