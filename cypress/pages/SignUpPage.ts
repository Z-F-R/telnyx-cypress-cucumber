class SignUpPage {
    // Locators
    getHeading() {
        return cy.get("h1");
    }

    getEmailInput() {
        return cy.get("#unified-sign-up-email");
    }

    getTermsCheckbox() {
        return cy.get("#unified-sign-up-terms");
    }

    getCreateAccountButton() {
        return cy.get('button[type="submit"]');
    }

    getEmailError() {
        return cy.get("#unified-sign-up-email_message");
    }

    getTermsError() {
        return cy.get("#unified-sign-up-terms_message");
    }

    // Actions
    visit() {
        cy.visit("/sign-up");
    }

    typeEmail(email: string) {
        this.getEmailInput().clear().type(email);
    }

    acceptTerms() {
        this.getTermsCheckbox().check({ force: true });
    }

    clickCreateAccount() {
        this.getCreateAccountButton().click();
    }
}

export default new SignUpPage();
