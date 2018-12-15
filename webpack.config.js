'use strict';
const path = require('path')

module.exports = (env) => {
  const isDevBuild = !(process.env.NODE_ENV && process.env.NODE_ENV === 'production') && !(env && env.prod);
  
  console.log(`Building in dev mode: ${isDevBuild}`);
  const environment = isDevBuild ? 'development' : 'production';
  
  return {
    mode: environment,
    entry: {
        main: './src/index.js'
    },
    output: {
      filename: '[name].js',
      publicPath: '/dist/',
      path: path.resolve(__dirname, 'wwwroot/dist/')
    },
  }
}