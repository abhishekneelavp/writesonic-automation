const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://app.writesonic.com/login',
      show: true,
      browser: 'chromium'

    }
  },
  include: {
    "I": "../steps_file.js",
    "loginPage": "../pages/WritesonicLoginPage.js",
    "testDataPage": "../resources/testdata.properties.js",
    "expectedAssertionsPage": "../resources/expectedassertions.properties.js",
    "article3.OPaget.jsPage": "./pages/Article3.OPaget.js.js",
    "article3.OPagePage": "./pages/Article3.OPage.js"
  },
  name: 'writesonic-automation',
  plugins: {
    allure: {
      enable: true
    }
  }
}