const locators = {
    loginTitle: '(//android.widget.TextView[@text="Login"])[1]',
    usernameField: '//android.widget.EditText[@content-desc="username"]',
    passwordField: '//android.widget.EditText[@content-desc="password"]',
    loginButton: '//android.widget.Button[@content-desc="loginBtn"]',
    authorisedTitle: '//android.widget.TextView[@text="Secret Area"]',
    logoutButton: '//android.widget.Button[@content-desc="Logout"]',
    invalidText: '//android.widget.TextView[@resource-id="android:id/message"]',
    okbutton: '//android.widget.Button[@resource-id="android:id/button1"]'
};

class LoginPage {
    get loginTitle() {
        return $(locators.loginTitle);
    }

    get usernameField() {
        return $(locators.usernameField);
    }

    get passwordField() {
        return $(locators.passwordField);
    }

    get loginButton() {
        return $(locators.loginButton);
    }

    get authorisedTitle() {
        return $(locators.authorisedTitle);
    }

    get logoutButton() {
        return $(locators.logoutButton);
    }

    get invalidText() {
        return $(locators.invalidText);
    }

    get okbutton() {
        return $(locators.okbutton);
    }
}

export default new LoginPage();