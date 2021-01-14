const { webpackConfig } = require("direflow-scripts");
const { addReactRefresh } = require("customize-cra-react-refresh");
const { override } = require("customize-cra");

const assaOverrides = () => (config, env) => {
  return {
    ...webpackConfig(config, env),
    // Add your own webpack config here (optional)
  };
};
/**
 * Webpack configuration for Direflow Component
 * Additional webpack plugins / overrides can be provided here
 */
module.exports = override(assaOverrides(), addReactRefresh());

// module.exports = (config, env) => ({
//   ...webpackConfig(config, env),
//   // Add your own webpack config here (optional)
// });
