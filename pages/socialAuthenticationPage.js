const socialAuthenticationCommands = {
    fbLogin() {
        return this
            .waitForElementVisible('@facebookButton',300)
            .click('@facebookButton')
    },
    googlePlusLogin() {
        return this
            .waitForElementVisible('@googlePlusButton',300)
            .click('@googlePlusButton')
    }
};

export default {
    commands: [socialAuthenticationCommands],
    elements: {
        facebookButton: {
            selector: '.fb-btn'
        },
        googlePlusButton: {
            selector: '.gp-btn'
        }
    }
};