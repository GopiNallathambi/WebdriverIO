describe('Demo Test', function () {

    // it('My First test', function () {
    it('My First test', async () => {
        browser.url('https://google.com')
         await $('[type="search"]').setValue('WebDriverIO')
        browser.pause(3000000)
        await $('[name="btnm"]').click
        browser.pause(30000)

        browser.pause(4000)
        browser.keys('Enter')

    })

})