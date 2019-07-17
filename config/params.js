'use strict';

const _ = require('lodash');

function logConfig() {
  console.log(`------------------------------------------------------`);
  console.log(`Config loaded`);
  console.log(`------------------------------------------------------`);
}

function loadConfig() {
  // Get environment variables or default parameters
  const configFilePath = process.env.NODE_ENV || '../params.json';
  const environment = process.env.NODE_ENV || 'development';
  const config = require(configFilePath);
  const defaultConfig = config.development;
  const environmentConfig = config[environment];
  const finalConfig = _.merge(defaultConfig, environmentConfig);
  global.config = finalConfig;
  logConfig();
}

module.exports.loadConfig = loadConfig;
