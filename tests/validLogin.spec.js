import loginPage from "../pages/loginPage";
import mainPage from "../pages/mainPage";

describe('Valid logging in', () => {
    it('should open the Login page', async () => {

        await expect(mainPage.pageTitle).toBeDisplayed();
        await mainPage.loginScreen.click();
        await expect(loginPage.loginTitle).toBeDisplayed();

    });

    it('should login and check if logged in', async () => {

        await loginPage.usernameField.setValue('alice');
        await loginPage.passwordField.setValue('mypassword');
        await loginPage.loginButton.click();
        await expect(loginPage.authorisedTitle).toBeDisplayed();

    });

    it('should logout and check if logged out', async () => {

        await loginPage.logoutButton.click();
        await expect(loginPage.loginTitle).toBeDisplayed();
    });
});
