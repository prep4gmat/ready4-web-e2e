export default {
    'User sets log in credentials': (client) => {
    const loginPage = client.page.loginPage();
    loginPage.navigate().login('jonathan@ready4.com', 1234567);
    loginPage.expect.element('@emailInput').value.to.equal('jonathan@ready4.com');
    loginPage.expect.element('@passInput').value.to.equal('1234567');
    loginPage.expect.element('@loginButton').to.not.have.attribute('disabled');
    client.end();
    },

    'User submits with empty email': (client) => {
        const loginPage = client.page.loginPage();
        loginPage.navigate().login('', 1234567);
        loginPage.expect.element('@emailInput').value.to.equal('');
        loginPage.expect.element('@passInput').value.to.equal('1234567');
        loginPage.expect.element('@loginButton').to.have.attribute('disabled');
        client.end();
    },

    'Check susccessful login': (client) => {
        const loginPage = client.page.loginPage();
        const coursePage = client.page.coursePage();
        loginPage.navigate().login('jonathan@ready4.com', 1234567);
        //allow time for login to succeed
        coursePage.expect.element('@courseContainer').to.be.visible.after(3000);
        client.end();
    },

    'Click forget password go to forgot password': (client) => {
        const loginPage = client.page.loginPage();
        const forgotPasswordPage = client.page.forgotPasswordPage();
        loginPage.navigate().forgetPassword();
        //allow time for login to succeed
        forgotPasswordPage.expect.element('@forgetPasswordContainer').to.be.visible.after(1000);
        client.end();
    },

    'Click register go to sign up': (client) => {
        const loginPage = client.page.loginPage();
        const signUpPage = client.page.signUpPage();
        loginPage.navigate().register();
        //allow time for login to succeed
        signUpPage.expect.element('@signUpContainer').to.be.visible.after(1000);
        client.end();
    }
};