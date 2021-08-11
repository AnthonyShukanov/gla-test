const { Given, When, Then} = require("@cucumber/cucumber");
const { element, browser } = require("protractor");
const { ecHelper } = require("./helpers/ecHelper");
const { ECOptions } = require("./helpers/ecHelper");
const ConfigConstants = require("./helpers/ConfigConstants");

const keywordField = element(by.css('[placeholder*=Keyword]'));

Given(/^we open "(.+)" page$/, async function (url) {
    await browser.wait(
        ecHelper(keywordField, ECOptions.VISIBLE),
        ConfigConstants.VISIBILITY_TIMEOUT
    );
    await browser.get(url);
});

