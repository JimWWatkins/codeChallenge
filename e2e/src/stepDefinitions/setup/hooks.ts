import { Before, After } from "@cucumber/cucumber"
import { Builder } from 'selenium-webdriver'
import * as fs from "fs"
    
Before(
    async function() {
        const driver = new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        global.myDriver = driver;
    }
)

After(
    async function(scenario) {
        const scenarioStatus = scenario.result?.status;
        if( scenarioStatus === "FAILED"){
            global.myDriver.takeScreenshot().then(
                (image)=>{
                    fs.writeFileSync(`./src/reports/screenshots/${scenario.pickle.name}.png`, image, "base64");
                }
            )
        }
        await global.myDriver.quit();
        }
)