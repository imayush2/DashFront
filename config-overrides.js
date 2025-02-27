const webpack = require("webpack");

module.exports = {
  webpack: (config) => {
    // Add the crypto fallback here
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: require.resolve("crypto-browserify"),
    };

    return config;
  },
};
