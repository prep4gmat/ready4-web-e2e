const signUpCommands = {
    signUp(firstName, lastName, email, pass) {
        return this
            .waitForElementVisible('@emailInput',300)
            .setValue('@firstNameInput', firstName)
            .setValue('@lastNameInput', lastName)
            .setValue('@emailInput', email)
            .setValue('@passwordInput', pass)
            .waitForElementPresent('@registerButton', 1000)
            .click('@registerButton')
    },
    signIn() {
        return this
            .waitForElementVisible('@login',300)
            .click('@login')
    },
    signInFromLink() {
        return this
            .waitForElementVisible('@loginMemberLink',300)
            .click('@loginMemberLink')
    }
};



export default {
    url: 'https://ready4gmat-frontend-staging.herokuapp.com/sign-up',
    commands: [signUpCommands],
    elements: {
        signUpContainer: {
            selector: '.signup-container'
        },
        firstNameInput:{
            selector: 'input[name="first_name"]'
        },
        lastNameInput:{
            selector: 'input[name="last_name"]'
        },
        emailInput:{
            selector: 'input[name="email"]'
        },
        passwordInput:{
            selector: 'input[name="password"]'
        },
        registerButton:{
            selector: 'button[type="submit"]'
        },
        login:{
            selector:'.sign-in-register'
        },
        errorMessage:{
            selector: '.error-message'
        },
        loginMemberLink:{
            selector:'.login-link'
        }
    }
};