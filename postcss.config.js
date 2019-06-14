/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const postSimpleVars = require('postcss-simple-vars');

module.exports = {
  plugins: [postcssImport({ path: '.' }), postcssNested({}), postSimpleVars({})]
};
