
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('check Draw button displays div with id= choices', async () =>{
    const drawbtn = await driver.findElement(By.id('draw'))
    const displayed = await drawbtn.isDisplayed()
    expect(displayed).toBe(true)
})

test('check add duo btn displays with id= player duo',async () => {
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed()
    expect(playerDuo).toBe(true) 
})

