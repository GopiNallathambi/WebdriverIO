describe("Tutorialpoint application", function(){

it('Get Page Title', function(){

    browser.url("https://www.tutorialspoint.com/about/about_careers.htm")
      //print page title in console
      console.log(browser.getTitle())
})

})
