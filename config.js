exports.config = {
    framework: 'custom',
    directConnect: true,
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
      './features/*.feature'
    ],
    cucumberOpts: {
      require: [
        './steps/*.js'
      ]
    }
  };