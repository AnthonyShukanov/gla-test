const { Given, When, Then, setDefaultTimeout, After} = require("@cucumber/cucumber");
const { element, browser } = require("protractor");
const { ecHelper } = require("./helpers/ecHelper");
const { ECOptions } = require("./helpers/ecHelper");
const { homePage }= require('./po/pageMap');
const ConfigConstants = require("./helpers/ConfigConstants");
setDefaultTimeout(ConfigConstants.GLOBAL_TIMEOUT);

Given(/^we open "(.+)" page$/, async function (url) {
    await browser.get(url);
});

Given(/^disable the waiting for Angular$/, async function() {
    
    await browser.waitForAngularEnabled(false);
});

When(/^type "(.+)" to Keyword field$/, async function(text) {
    await homePage.typeToKeywordField(text);
});

Then(/^click Find-button$/, async function() {
    await homePage.clickFindButton();
});

