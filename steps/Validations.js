const { Given, When, Then, setDefaultTimeout} = require("@cucumber/cucumber");
const { browser } = require("protractor");
const { expect } = require("chai");
const { ecHelper } = require("./helpers/ecHelper");
const { ECOptions } = require("./helpers/ecHelper");
const { homePage }= require('./po/pageMap');
const ConfigConstants = require("./helpers/ConfigConstants");
setDefaultTimeout(ConfigConstants.GLOBAL_TIMEOUT);

When(/^page should be "(.+)"$/, async function(url) {
    expect(await browser.getCurrentUrl()).equals(url);
});

When(/^text of searching result should be "(.+)"$/, async function(expectedText) {
    const actualText = await homePage.getTextFromResult();
    expect(expectedText).equals(actualText);
})