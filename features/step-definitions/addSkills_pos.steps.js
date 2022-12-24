import { Given, When, Then } from '@wdio/cucumber-framework';

When(/^User accesses the skills menu page$/, async function () {
    await $('a[href*="viewAdminModule"]').click();
    await browser.pause(2000);
    await $('.oxd-topbar-body-nav-tab*=Qualifications').click();
    await browser.pause(2000);
    await $('.oxd-topbar-body-nav-tab-link*=Skills').click();
    await browser.pause(2000);
});

When(/^User click button add$/, async function () {
    await $('button*=Add').click();
});

When(/^User input skill name (.+) and description (.+)$/, async function (skillname, description) {
    await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/input').setValue(skillname);
    await browser.pause(1000);
    await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/textarea').setValue(description);
    await browser.pause(1000);
    await $('button*=Save').click();
    await browser.pause(1000);
});

Then(/^User should see a flash message saying (.+)$/, async function (successmessage) {
    const classMessage = $('.oxd-text--toast-message');
    // await browser.pause(3000);
    expect(await classMessage.getText()).toHaveText(successmessage);
});