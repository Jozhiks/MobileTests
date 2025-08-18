import mainPage from "../pages/mainPage";
import echoPage from "../pages/echoPage";

describe('Open the first option', () => {
    it('should open the Echo page', async () => {

        await expect(mainPage.echoBox).toBeDisplayed();
        await mainPage.echoBox.click();

    });

    it('should check if contents visible', async () => {

        await expect(echoPage.inputField).toBeDisplayed();
        await expect(echoPage.saveButton).toBeDisplayed();
        await echoPage.backButton.click();
        await expect(mainPage.echoBox).toBeDisplayed();

    });
});
