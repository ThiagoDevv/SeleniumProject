const {Builder, By, Key, util} = require("selenium-webdriver");
async function gallery() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.nasa.gov/");
    await driver.findElement(By.name("query")).sendKeys("galaxy", Key.RETURN);
    const butao = await driver.findElement(By.linkText("Images"));
    butao.click(); //clicar
}

async function missions() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.nasa.gov/");
    const butao = await driver.findElement(By.linkText("Missions"));
    butao.click();

    const Artemis = await driver.findElement(By.linkText("Artemis I"));
    Artemis.click();
}

async function nasaTv() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.nasa.gov/");
    const butao = await driver.findElement(By.linkText("NASA TV"));
    butao.click();
}
gallery();
missions();
nasaTv();