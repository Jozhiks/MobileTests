const locators = {
    inputField: '//android.widget.EditText[@content-desc="messageInput"]',
    saveButton: '//android.widget.TextView[@text="Save"]',
    backButton: '//android.widget.ImageButton[@content-desc="Navigate Up"]'
};

class EchoPage {
    get inputField() {
        return $(locators.inputField);
    }

    get saveButton() {
        return $(locators.saveButton);
    }

    get backButton() {
        return $(locators.backButton);
    }
}

export default new EchoPage();