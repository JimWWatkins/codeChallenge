import { Given } from '@cucumber/cucumber'

Given(
    /^I am on the home page$/, {timeout: 20000},
    async function () {
        await global.myDriver.get("http://amazon.com");
    }
)