const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const moduleFederationConfig = require('./module-federation.config');

module.exports = (options) => {
  console.info(options);
  return {
    ...options,
    output: {
      path: '/home/cpawlukiewicz/www/managerplus/asset-settings/dist/apps/mfe-marketplace',
      publicPath: "auto",
      uniqueName: "marketplace",
      scriptType: 'text/javascript',
    },
    // experiments: {
    //   ...options.experiments,
    // },
    plugins: [
      ...options.plugins,
      new ModuleFederationPlugin(moduleFederationConfig),
    ]
  };
}
