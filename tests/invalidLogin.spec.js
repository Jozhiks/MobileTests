import loginPage from "../pages/loginPage";
import mainPage from "../pages/mainPage";

describe('Login error message', () => {
    it('should open the Login page', async () => {

        await expect(mainPage.pageTitle).toBeDisplayed();
        await mainPage.loginScreen.click();
        await expect(loginPage.loginTitle).toBeDisplayed();

    });

    it('should try to login with invalid info', async () => {

        await loginPage.usernameField.setValue('test');
        await loginPage.passwordField.setValue('test');
        await loginPage.loginButton.click();

    });

    it('should check the invalid info message and dismiss ir', async () => {

        await expect(loginPage.invalidText).toBeDisplayed();
        await loginPage.okbutton.click();
    });
});
