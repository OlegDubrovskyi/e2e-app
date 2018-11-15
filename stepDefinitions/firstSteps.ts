import { FirstPage } from '../pages/firstPage';
import { Given, When, Then, } from 'cucumber';
import {expect} from 'chai';

const firstPage:FirstPage = new FirstPage();

When(/^I click on browser button$/, async () => {
    await browser.click(firstPage.button);
    await browser.waitForVisible('#name_input', 3000);
});

When(/^I send keys$/, async () => {
    await browser.clearElement(firstPage.nameInput);
    await browser.addValue(firstPage.nameInput, 'Appium User');
    await browser.timeoutsImplicitWait( 1000);
    await expect(await browser.getText(firstPage.nameInput)).equal('Appium User')
});
