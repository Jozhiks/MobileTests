const locators = {
    pageTitle: '//android.widget.TextView[@text="TheApp"]',
    loginScreen: '//android.widget.TextView[@resource-id="listItemTitle" and @text="Login Screen"]',
    echoBox: '//android.widget.TextView[@resource-id="listItemTitle" and @text="Echo Box"]'
};

class MainPage {
    get pageTitle() {
        return $(locators.pageTitle);
    }

    get loginScreen() {
        return $(locators.loginScreen);
    }

    get echoBox() {
        return $(locators.echoBox);
    }
}

export default new MainPage();