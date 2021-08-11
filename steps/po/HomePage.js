const { element, browser, by } = require("protractor");
const { ecHelper } = require("../helpers/ecHelper");
const { ECOptions } = require("../helpers/ecHelper");
const { setDefaultTimeout } = require("@cucumber/cucumber");
const ConfigConstants = require("../helpers/ConfigConstants");
setDefaultTimeout(ConfigConstants.GLOBAL_TIMEOUT);

class Homepage {
    keywordField = element(by.css('[placeholder*=Keyword]'));
    findButton = element(by.css('.recruiting-search__submit'));
    searchResult = element(by.css('.search-result__heading'));
    /**
     * Sending text to field "Keyword" 
     * @param text - text which would sent to field "Keyword"   
     */
    async typeToKeywordField(text) {
        await this.keywordField.sendKeys(text);
    }

    async clickFindButton() {
        await this.findButton.click();
    }

    /**
     * Getting text from heading 
     * @param text - text which would displayed on screen   
     */
    async getTextFromResult() {
        return this.searchResult.getText();
    }
}
module.exports = Homepage;