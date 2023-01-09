const {
    shareAll,
    withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
    remotes: {
        // Check this line. Is port 4201 configured?
        // mfe-marketplace: '/mfe-mfe-marketplace/remoteEntry.js',
    },

    shared: {
        ...shareAll({
            singleton: true,
            strictVersion: true,
            requiredVersion: 'auto',
        }),
    },
});
