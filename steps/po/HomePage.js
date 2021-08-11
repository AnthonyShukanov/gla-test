const { element, browser, by } = require("protractor");
const { ecHelper } = require("../helpers/ecHelper");
const { ECOptions } = require("../helpers/ecHelper");
const ConfigConstants = require("../helpers/ConfigConstants");
const { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(ConfigConstants.GLOBAL_TIMEOUT);

class Homepage {
    keywordField = element(by.css('[placeholder*=Keyword]'));
    async typeToKeywordField(text) {
        await this.keywordField.sendKeys(text);
    }
}
module.exports = Homepage;