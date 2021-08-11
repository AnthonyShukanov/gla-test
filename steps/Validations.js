const { Given, When, Then} = require("@cucumber/cucumber");
const { browser } = require("protractor");
const { expect } = require("chai");

When(/^page should be "(.+)"$/, async function(url) {
    expect(await browser.getCurrentUrl()).to.match(url);
})