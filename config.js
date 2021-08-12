const { generate } = require('multiple-cucumber-html-reporter');
const { removeSync } = require('fs-extra');

exports.config = {
  framework: 'custom',
  directConnect: true,
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    './features/*.feature'
  ],
  BeforeLaunch: () => {
    removeSync('./reports');
  },
  afterLaunch: async () => {
    generate({
      jsonDir: './reports/',
      reportPath: './reports/',
    });
  },

  cucumberOpts: {
    require: [
      './steps/*.js'
    ],
    format: ["progress", "json:reports/report." + new Date().getTime() + ".json"],
    compiler: [],
  }
};