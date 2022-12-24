import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^User on the login page$/, async () => {
    await browser.url('https://opensource-demo.orangehrmlive.com');
});

When(/^User login with (.+) and (.+)$/, async (usernameOHRM, passwordOHRM) => {
    await $('[name="username"]').setValue(usernameOHRM);
    await $('[name="password"]').setValue(passwordOHRM);
    await $('button[type="submit"]').click();
});

Then(/^User validate title page (.+)$/, async (title) => {
    const xpathtitle = $('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6');
    await browser.pause(3000);
    expect(await xpathtitle.getText()).toEqual(title);
});