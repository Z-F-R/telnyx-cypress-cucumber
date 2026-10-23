import BasePage from "./BasePage";

class SignUpPage extends BasePage {
    constructor() {
        super("/sign-up");
    }

    // Locators
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
    typeEmail(email: string) {
        this.getEmailInput().clear().type(email);
    }

    acceptTerms() {
        // The checkbox is a visible native input, so it is checked directly.
        // A click on its label would land on the Terms link in the middle of it.
        this.getTermsCheckbox().check();
        this.getTermsCheckbox().should("be.checked");
    }

    clickCreateAccount() {
        this.getCreateAccountButton().click();
    }
}

export default new SignUpPage();
