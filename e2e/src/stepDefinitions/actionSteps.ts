import { When } from '@cucumber/cucumber'
import { By, Key } from 'selenium-webdriver'

When(
    /^I search for an "([^"]*)"$/, {timeout: 10000},
    async function (searchQuery:string) {
        const searchBar = await global.myDriver.findElement(By.id("twotabsearchtextbox")).sendKeys('xbox one x', Key.ENTER);
    }
)

When(
    /^I click on the language header link$/,
    async function () {
        const languageHeaderLink = await global.myDriver.findElement(By.className("icp-nav-link-inner"));
        languageHeaderLink.click()
    }
)

When(
    /^I chose to view the homepage in "(.*)"$/,
    async function (language:string) {
        const languageSelect = await global.myDriver.findElement(By.id("icp-language-translation-hint"));
        languageSelect.click()
        const confirmButton = await global.myDriver.findElement(By.className("a-button-input"));
        confirmButton.click()
    }
)

When(
    /^I login with email "(.*)" and password "(.*)"$/, {timeout: 10000},
    async function (email:string, password:string) {
        const signInDropdown = await global.myDriver.findElement(By.id("nav-link-accountList"));
        await signInDropdown.click()

        await global.myDriver.findElement(By.id("ap_email")).sendKeys(email, Key.ENTER);
        await global.myDriver.findElement(By.id("ap_password")).sendKeys(password, Key.ENTER);
    }
)

When(
    /^I remove user profile "(.*)"$/, {timeout: 10000},
    async function (profileName:string) {
        const userDropdown = await global.myDriver.findElement(By.id("nav-link-accountList"));
        await userDropdown.click();
        
        const yourProfilesButton = await global.myDriver.findElement(By.xpath("//*[contains(text(), 'Your Profiles')]"));
        await yourProfilesButton.click();

        const mainUserProfile = await global.myDriver.findElement(By.xpath(`//*[contains(text(), 'TestUser2')]`));
        await mainUserProfile.click();

        global.myDriver.navigate().back();
        
        const userProfile = await global.myDriver.findElement(By.xpath(`//*[contains(text(), '${profileName}')]`));
        await userProfile.click();
        
        const profileDeleteButton = await global.myDriver.findElement(By.xpath(`//a[contains(text(), 'Remove this profile')]`));
        await profileDeleteButton.click();

        await global.myDriver.manage().setTimeouts({implicit: 1000});

        const deleteProfileConfirmButton = await global.myDriver.findElement(By.id(`delete-profile-submit-button`));
        await deleteProfileConfirmButton.click();
    }
)

