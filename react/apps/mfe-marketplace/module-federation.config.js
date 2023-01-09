const deps = require('../../package.json').dependencies;

module.exports = {
  name: "marketplace",
  library: { type: "var", name: "marketplace" },
  filename: "remoteEntry.js", // <-- Meta Data
  exposes: {
    './web-components': './src/app/custom-element.tsx',
  },
  shared: ['react', 'react-dom']
};
