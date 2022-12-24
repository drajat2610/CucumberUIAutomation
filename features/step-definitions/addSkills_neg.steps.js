import { Given, When, Then } from '@wdio/cucumber-framework';

When(/^User accesses Admin menu >> tab Qualifications >> submenu Skills$/, async function () {
    await $('a[href*="viewAdminModule"]').click();
    await browser.pause(2000);
    await $('.oxd-topbar-body-nav-tab*=Qualifications').click();
    await browser.pause(2000);
    await $('.oxd-topbar-body-nav-tab-link*=Skills').click();
    await browser.pause(2000);
});

When(/^User click button add skills$/, async function () {
    await $('button*=Add').click();
});

When(/^User input existing skill name (.+)$/, async function (existingskill) {
    await $('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/input').setValue(existingskill);
    await browser.pause(2000);
});

Then(/^The system displays an error message saying (.+)$/, async function (errormessage) {
    const classMessage = $('.oxd-input-field-error-message');
    expect(await classMessage.getText()).toHaveText(errormessage);
});
