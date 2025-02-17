const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve.fallback = {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer"),
    assert: require.resolve("assert"),
    vm: require.resolve("vm-browserify")
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    })
  );

  return config;
};
