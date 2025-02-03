const fs = require("fs");
const path = require("path");

const webpackConfigPath = path.resolve("node_modules/react-scripts/config/webpack.config.js");

fs.readFile(webpackConfigPath, "utf8", (err, data) => {
  if (err) {
    console.error("❌ Error reading webpack.config.js:", err);
    return;
  }

  if (data.includes('"crypto": require.resolve("crypto-browserify")')) {
    console.log("✅ Webpack polyfills already applied.");
    return;
  }

  let updatedConfig = data.replace(
    "resolve: {",
    `resolve: { fallback: { 
        "crypto": require.resolve("crypto-browserify"),
        "vm": require.resolve("vm-browserify"),
        "stream": require.resolve("stream-browserify"),
        "buffer": require.resolve("buffer/"),
        "url": require.resolve("url/"),
        "assert": require.resolve("assert/"),
        "process": require.resolve("process/browser"),
        "os": require.resolve("os-browserify/browser"),
        "tty": require.resolve("tty-browserify"),
        "child_process": false
    },`
  );

  fs.writeFile(webpackConfigPath, updatedConfig, "utf8", (err) => {
    if (err) {
      console.error("❌ Error writing webpack.config.js:", err);
    } else {
      console.log("✅ Webpack polyfills added successfully!");
    }
  });
});
