export default {
    'Check user sets log in credentials': (client) => {
    const loginPage = client.page.loginPage();
    loginPage.navigate().login('jonathan@ready4.com', 1234567);
    loginPage.expect.element('@emailInput').value.to.equal('jonathan@ready4.com');
    loginPage.expect.element('@passInput').value.to.equal('1234567');
    loginPage.expect.element('@loginButton').to.not.have.attribute('disabled');
    client.end();
    },

    'Check user submits with empty email': (client) => {
        const loginPage = client.page.loginPage();
        loginPage.navigate().login('', 1234567);
        loginPage.expect.element('@emailInput').value.to.equal('');
        loginPage.expect.element('@passInput').value.to.equal('1234567');
        loginPage.expect.element('@loginButton').to.have.attribute('disabled');
        client.end();
    },

    'Check email login': (client) => {
        const loginPage = client.page.loginPage();
        const coursePage = client.page.coursePage();
        loginPage.navigate().login('jonathan@ready4.com', 1234567);
        //allow time for login to succeed
        coursePage.expect.element('@courseContainer').to.be.visible.after(3000);
        client.end();
    },

    'Check invalid login': (client) => {
        const loginPage = client.page.loginPage();
        loginPage.navigate().login('jonathan@ready4.com', 1111111111);
        //allow time for login to succeed
        loginPage.expect.element('@errorMessage').to.be.visible.after(3000);
        loginPage.expect.element('@errorMessage').text.to.equal('Invalid Email Or Password.').after(3000);
        client.end();
    },
    //TODO- Wait until facebook app for staging exists
    // 'Check facebook login': (client) => {
    //     const loginPage = client.page.loginPage();
    //     const coursePage = client.page.coursePage();
    //     loginPage.navigate().fbLogin();
    //     //allow time for login to succeed
    //     coursePage.expect.element('@courseContainer').to.be.visible.after(6000);
    //     client.end();
    // },
    //
    // 'Check google plus login': (client) => {
    //     const loginPage = client.page.loginPage();
    //     const coursePage = client.page.coursePage();
    //     loginPage.navigate().googlePlusLogin();
    //     //allow time for login to succeed
    //     coursePage.expect.element('@courseContainer').to.be.visible.after(3000);
    //     client.end();
    // },
    //
    'Check click forget password go to forgot password': (client) => {
        const loginPage = client.page.loginPage();
        const forgotPasswordPage = client.page.forgotPasswordPage();
        loginPage.navigate().waitForElementVisible('@loginContainer', 300).expect.element('@forgotPassword').text.to.equal('Forgot Password?');
        loginPage.navigate().forgetPassword();
        //allow time for login to succeed
        forgotPasswordPage.expect.element('@forgotPasswordContainer').to.be.visible.after(1000);
        client.end();
    },

    'Check click register go to sign up': (client) => {
        const loginPage = client.page.loginPage();
        const signUpPage = client.page.signUpPage();
        loginPage.navigate().waitForElementVisible('@loginContainer', 300).expect.element('@signUp').text.to.equal('REGISTER');
        loginPage.navigate().register();
        //allow time for login to succeed
        signUpPage.expect.element('@signUpContainer').to.be.visible.after(1000);
        signUpPage.navigate().waitForElementVisible('@signUpContainer', 300).expect.element('@login').text.to.equal('SIGN IN');
        client.end();
    }
};