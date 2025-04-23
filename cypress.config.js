const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth: 1300,
  viewportHeight: 660,
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl:'https://magento.softwaretestingboard.com',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
  env:{
    register_Url:'/customer/account/create/',
    login_Url:'/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/',
    cart_Url:"/checkout/cart/"
  }
});
