import { Then } from '@cucumber/cucumber'
import { expect } from 'chai'
import { By } from 'selenium-webdriver'

Then(
    /^the fist search result should include "([^"]*)"$/, {timeout: 30000},
    async function (expectedItem:string) {
        const items = await global.myDriver.findElements(By.className('sg-col-inner'));
        const firstItem = await items[3].getText();
        expect(await firstItem).to.contain(expectedItem);
    }
)

Then(
    /^the logo should be displayed$/, {timeout: 10000},
    async function () {
        const logo = await global.myDriver.findElement(By.id('nav-logo-sprites'));
        expect(await logo.isDisplayed()).to.be.true;
    }
)

Then(
    /^the homepage location selector displays "(.*)"$/, {timeout: 10000},
    async function (expectedText:string) {
        global.myDriver.navigate().refresh();
        await global.myDriver.manage().setTimeouts( { implicit: 1000 } );
        const headerLocationSelect = await global.myDriver.findElement(By.id("glow-ingress-line2"));
        expect(await headerLocationSelect.getText()).to.contain(expectedText);
    }
)

Then(
    /^the price is equal to "(.*)"$/, {timeout: 10000},
    async function (expectedPriceString:string) {
        const itemsPricesStrings = await global.myDriver.findElements(By.className("a-offscreen"));
        const firstItemPriceString = await itemsPricesStrings[4].getAttribute("innerText");

        const firstItemPriceNum = await firstItemPriceString.split("$")[1];
        const expectedPriceNum = expectedPriceString.split("$")[1];

        expect(Number(firstItemPriceNum)).to.equal(Number(expectedPriceNum));
    }
)

Then(
    /^I should see my username "(.*)" logged in on the homepage$/, {timeout: 10000},
    async function (expectedUsername:string) {
        const userName = await global.myDriver.findElement(By.id("nav-link-accountList-nav-line-1"));
        expect(await userName.getText()).to.contain(expectedUsername);
    }
)

Then(
    /^the "(.*)" profile is not shown under user profiles$/, {timeout: 10000},
    async function (profileName:string) {
        const profiles = await global.myDriver.findElements(By.xpath(`//*[contains(text(), 'TestUser')]`));
        let result;
        for(const p in profiles){
            if(profiles[p].getText() === profileName){
                result = true;
            }
            return result;
        }
        expect(result).to.be(false);
    }
)