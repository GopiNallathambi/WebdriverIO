describe('Demo Test', function () {

    // it('My First test', function () {
    it('My First test', async () => {
        browser.url('https://google.com')
         await $('[type="search"]').setValue('WebDriverIO')
        browser.pause(9000000)
        await $('[name="btnm"]').click
        browser.pause(60000)

        browser.pause(6000)
        browser.keys('Enter')

    })

})