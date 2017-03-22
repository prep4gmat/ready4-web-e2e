
const resetPasswordCommands = {
    resetPassword(email){
        return this
            .waitForElementVisible('@forgotPasswordContainer',300)
            .setValue('@emailInput', email)
            .waitForElementPresent('@forgotPasswordButton', 1000)
            .click('@forgotPasswordButton')
    }
};

export default {
    url: 'https://ready4gmat-frontend-staging.herokuapp.com/forgot-password',
    commands: [resetPasswordCommands],
    elements: {
        resetPasswordContainer: {
            selector: '.reset-password-container'
        },
        tempPasswordInput: {
            selector: 'input[name="tempPassword"]'
        },
        passwordInput: {
            selector: 'input[name="password"]'
        },
        resetPasswordButton: {
            selector: 'button[type="submit"]'
        },
        errorMessage: {
            selector: '.error-message'
        }
    }
};