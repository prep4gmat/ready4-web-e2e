export default {

    beforeEach : function(client) {
        const loginPage = client.page.loginPage();
        loginPage.navigate().login('jonathan@ready4.com',1234567).waitForElementNotVisible('@loginContainer', 6000);
    },

    'Check enter course page': (client) => {
        const coursePage = client.page.coursePage();
        coursePage.expect.element('@courseContainer').to.be.visible;
        coursePage.expect.element('@courseSnakeContainer').to.be.visible;
        coursePage.expect.element('@courseAnalyticsContainer').to.be.visible;
        client.end();
    },
    'Check course page snake elements showing': (client) => {
        const coursePage = client.page.coursePage();
        coursePage.expect.element('@courseContainer').to.be.visible;
        coursePage.expect.element('@courseSnakeContainer').to.be.visible;
        coursePage.expect.element('@snakeContainer').to.be.visible;
        client.elements('css selector','[id^=snakeRowElement]',(result)=>{
            client.assert.ok(result.value.length > 0);
        });
        client.end();
    }
};