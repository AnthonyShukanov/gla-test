const { element, browser, by } = require("protractor");
const { ecHelper } = require("../helpers/ecHelper");
const { ECOptions } = require("../helpers/ecHelper");
const { expect } = require("chai");
const { setDefaultTimeout } = require("@cucumber/cucumber");
const { byText } = require('../../utils/utils');
const ConfigConstants = require("../helpers/ConfigConstants");
setDefaultTimeout(ConfigConstants.GLOBAL_TIMEOUT);

class Homepage {
    keywordField = element(by.css('[placeholder*=Keyword]'));
    searchForm = element(by.css('form.recruiting-search__form'));
    locationDropdown = element(by.css('.select2-selection__rendered'));
    skillsDropdown = element(by.css('.job-search__departments'));
    locationOptions = element.all(by.css('.select2-results__option'));
    skillOptions = element.all(by.css('li[role=treeitem]'));
    findButton = element(by.css('.recruiting-search__submit'));
    searchResult = element(by.css('.search-result__heading:not([style*=none]), .search-result__error-message[style*=block]'));
    /**
     * Sending text to field "Keyword" 
     * @param text - text which would sent to field "Keyword"   
     */
    async typeToKeywordField(text) {
        await this.keywordField.sendKeys(text);
    }
    /**
     * Simple button-click
     */
    async clickFindButton() {
        await this.findButton.click();
    }

    /**
     * Getting text from heading 
     * @param text - text which would displayed on screen   
     */
    async getTextFromResult() {
        await browser.wait(
            ecHelper(this.searchResult, ECOptions.VISIBLE),
            ConfigConstants.VISIBILITY_TIMEOUT
        );
        return this.searchResult.getText();
    }
    /**
     * Selecting the location
     * @param locations 
     */
    async selectLocation(locations) {
        await this.locationDropdown.click();
        for (const location of locations) {
            const option = this.locationOptions.filter(byText(location));
            await option.click();
        }
    }
    /**
     * Selecting skills 
     * @param skills 
     */
    async selectSkills(skills) {
        await this.skillsDropdown.click();
        for (const skill of skills) {
            const option = this.skillOptions.filter(byText(skill));
            await option.click();
        }
    }
}
module.exports = Homepage;