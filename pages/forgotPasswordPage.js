
const forgotPasswordCommands = {
    forgotPassword(email){
        return this
            .waitForElementVisible('@forgotPasswordContainer',500)
            .setValue('@emailInput', email)
            .waitForElementPresent('@forgotPasswordButton', 1000)
            .click('@forgotPasswordButton')
    }
};

export default {
    url: 'https://ready4gmat-frontend-staging.herokuapp.com/forgot-password',
    commands: [forgotPasswordCommands],
    elements: {
        forgotPasswordContainer: {
            selector: '.forgot-password-container'
        },
        emailInput: {
            selector: 'input[name="email"]'
        },
        forgotPasswordButton: {
            selector: 'button[type="submit"]'
        },
        errorMessage: {
            selector: '.error-message'
        }
    }
};