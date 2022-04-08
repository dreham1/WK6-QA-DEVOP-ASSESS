
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})


describe('test for duel duo', () => {
    test('Title shows up when page loads', async () => {
        const title = await driver.findElement(By.id('title'))
        const displayed = await title.isDisplayed()
        expect(displayed).toBe(true)
    })

    test('choices display after clicking draw btn', async () =>{
        await driver.findElement(By.id('draw')).click()
        await driver.sleep(3000)
        const choicesDiv = await driver.findElement(By.id('choices'))
        const displayed = await choicesDiv.isDisplayed()
        expect(displayed).toBe(true)
    })

    test('Add to Duo button displays the div with id of player-duo',async () => {
        await driver.findElement(By.id('draw')).click()
        await driver.sleep(3000)
        await driver.findElement(By.xpath('(//button[text()="Add to duo"])[1]')).click()
        const playerDuoDiv = await driver.findElement(By.id('Add to Duo'))
        const displayed = await playerDuoDiv.isDisplayed()
        expect(displayed).toBe(true)
    })

})




