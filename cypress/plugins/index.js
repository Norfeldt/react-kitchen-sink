/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
const path = require('path')
const findWebpack = require('find-webpack')
const webpackPreprocessor = require('@cypress/webpack-preprocessor')

const percyHealthCheck = require('@percy/cypress/task')

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // USE ABSOLUTE PATHS - https://github.com/cypress-io/cypress/issues/3262#issuecomment-635550879
  const webpackOptions = findWebpack.getWebpackOptions()
  if (!webpackOptions) {
    throw new Error('Could not find Webpack in this project 😢')
  }
  const cleanOptions = {
    reactScripts: true,
  }
  findWebpack.cleanForCypress(cleanOptions, webpackOptions)
  const options = {
    webpackOptions,
    watchOptions: {},
  }
  options.webpackOptions.resolve.alias['@fixtures'] = path.resolve(
    process.cwd(),
    'cypress',
    'fixtures'
  )
  on('file:preprocessor', webpackPreprocessor(options))

  require('@cypress/code-coverage/task')(on, config)

  // PERCY SNAPSHOTS - https://docs.percy.io/docs/cypress
  on('task', percyHealthCheck)

  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config
}
