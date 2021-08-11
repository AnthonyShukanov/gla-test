const { Given, When, Then, setDefaultTimeout} = require("@cucumber/cucumber");
const { element, browser } = require("protractor");
const { ecHelper } = require("./helpers/ecHelper");
const { ECOptions } = require("./helpers/ecHelper");
const ConfigConstants = require("./helpers/ConfigConstants");
setDefaultTimeout(ConfigConstants.GLOBAL_TIMEOUT);

Given(/^we open "(.+)" page$/, async function (url) {
    await browser.get(url);
});

Given(/^disable the waiting for Angular$/, async function() {
    await browser.waitForAngularEnabled(false);
});

