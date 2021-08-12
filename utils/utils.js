function byText(text) {
    return async function (item) {
        return (await item.getText()) === text
    }
}

module.exports = {
    byText
}
