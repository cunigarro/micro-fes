const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const Dotenv = require("dotenv-webpack");
const share = mf.share;

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new Dotenv({
      path: './projects/shell/.env'
    }),
    new ModuleFederationPlugin({
      name: "shell",
      filename: "remoteEntry.js",
      // For hosts (please adjust)
      remotes: {
          "collection": "collection@" + process.env.COLLECTION_URL + "/remoteEntry.js",
          "admin": "admin@" + process.env.ADMIN_URL + "/remoteEntry.js"
      },

      exposes: {
        './userAuth': './projects/shell/src/app/services/auth.service.ts'
      },

      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      })

    })
  ],
};
