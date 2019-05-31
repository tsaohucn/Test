/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },

    }),
  },
  resolver: {
    extraNodeModules:
    {
      "domain": require.resolve("domain-browser"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "crypto": require.resolve("react-native-crypto"),
      "zlib": require.resolve("browserify-zlib"),
      "path": require.resolve("path-browserify"),
      "stream": require.resolve("stream-browserify"),
      "tls": require.resolve("tls"),
      "fs": require.resolve("react-native-fs"),
      "vm": require.resolve("vm-browserify"),
      "url": require.resolve("url"),
      "assert": require.resolve("assert"),
      "events": require.resolve("events"),
      "buffer": require.resolve("buffer"),
      "process": require.resolve("process")
    }
  }
};
