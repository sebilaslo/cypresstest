const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
   setupNodeEvents(on, config){
  },
  chromeWebSecurity: false,
  baseUrl: 'https://saucedemo.com',
  },
})