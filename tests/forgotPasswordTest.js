import moment from 'moment';
export default {

    beforeEach : function(client) {
        const forgotPasswordPage = client.page.forgotPasswordPage();
        forgotPasswordPage.navigate();
    },

    'Check enter forgot password page': (client) => {
        const forgotPasswordPage = client.page.forgotPasswordPage();
        forgotPasswordPage.expect.element('@emailInput').to.be.visible;
        forgotPasswordPage.expect.element('@forgotPasswordButton').to.be.visible;
        forgotPasswordPage.expect.element('@forgotPasswordButton').to.have.attribute('disabled');
        client.end();
    },

    'Check forgot password invalid email': (client) => {
        const forgotPasswordPage = client.page.forgotPasswordPage();
        let email = `info${moment().unix()}@ready4.com`;
        forgotPasswordPage.forgotPassword(email);
        forgotPasswordPage.expect.element('@forgotPasswordButton').to.be.visible;
        forgotPasswordPage.expect.element('@errorMessage').to.be.visible.after(3000);
        forgotPasswordPage.expect.element('@errorMessage').text.to.equal('Account Not Found, Please Check Email').after(3000);
        client.end();
    },

    'Check forgot password reset password': (client) => {
        const forgotPasswordPage = client.page.forgotPasswordPage();
        const signUpPage = client.page.signUpPage();
        const coursePage = client.page.coursePage();
        const resetPassword = client.page.resetPasswordPage();
        let email = `info+${moment().unix()}@ready4.com`;
        signUpPage.navigate().signUp('info','ltgexam',email, 1234567);
        //allow time for login to succeed
        coursePage.expect.element('@courseContainer').to.be.visible.after(3000);
        forgotPasswordPage.navigate().forgotPassword(email);
        resetPassword.expect.element('@resetPasswordContainer').to.be.visible.after(4000);
        client.end();
    }
};