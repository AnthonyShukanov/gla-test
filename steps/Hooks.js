const { After } = require("@cucumber/cucumber");
After(async function (scenario) {
    if (scenario.result.status === 'FAILED') {
        const screen = await browser.driver.takeScreenshot();
        this.attach(screen, "image/png");
    };
});