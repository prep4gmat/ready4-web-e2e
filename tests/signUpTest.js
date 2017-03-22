import moment from 'moment';
export default {

    beforeEach : function(client) {
        const signUpPage = client.page.signUpPage();
        signUpPage.navigate();
    },

    'Check enter sign up page': (client) => {
        const signUpPage = client.page.signUpPage();
        signUpPage.expect.element('@emailInput').to.be.visible;
        signUpPage.expect.element('@passwordInput').to.be.visible;
        signUpPage.expect.element('@firstNameInput').to.be.visible;
        signUpPage.expect.element('@lastNameInput').to.be.visible;
        signUpPage.expect.element('@registerButton').to.be.visible;
        signUpPage.expect.element('@registerButton').to.have.attribute('disabled');

        client.end();
    },
    
    'Check email sign up': (client) => {
        const signUpPage = client.page.signUpPage();
        const coursePage = client.page.coursePage();
        let email = `info+${moment().unix()}@ready4.com`;
        signUpPage.signUp('jonathan', 'yehie',email, 1234567);
        //allow time for login to succeed
        coursePage.expect.element('@courseContainer').to.be.visible.after(4000);
        client.end();
    },
    'Check email sign up no email': (client) => {
        const signUpPage = client.page.signUpPage();
        signUpPage.signUp('jonathan', 'yehie','', 1234567);
        //allow time for login to succeed
        signUpPage.expect.element('@registerButton').to.have.attribute('disabled');

        client.end();
    },

    'Check invalid email sign up': (client) => {
        const signUpPage = client.page.signUpPage();
        let email = `info${moment().unix()}@ready4.com`;
        signUpPage.signUp('jonathan', 'yehie',email, 1234567);
        //allow time for login to succeed
        signUpPage.expect.element('@errorMessage').to.be.visible.after(3000);
        signUpPage.expect.element('@errorMessage').text.to.equal('Email Does Not Exist, Please Check Email').after(3000);
        client.end();
    },

    'Check go to sign in from header': (client) => {
        const signUpPage = client.page.signUpPage();
        const loginPage = client.page.loginPage();
        signUpPage.signIn();
        loginPage.expect.element('@loginContainer').to.be.visible.after(3000);
        client.end();
    },
    'Check go to sign in from bottom link': (client) => {
        const signUpPage = client.page.signUpPage();
        const loginPage = client.page.loginPage();
        signUpPage.signInFromLink();
        loginPage.expect.element('@loginContainer').to.be.visible.after(3000);
        client.end();
    }
};