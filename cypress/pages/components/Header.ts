// Site header, shown on every page. The desktop and mobile layouts share the
// same markup, so links are taken from the visible layout only.
class Header {
    // Locators
    getHeader() {
        return cy.get("#site-header");
    }

    // The logo is an image link without text, so the homepage link is what
    // identifies it
    getLogo() {
        return cy.get('#site-header a[href="/"]').filter(":visible").first();
    }

    getLink(text: string) {
        return cy.contains("#site-header a:visible", text, { matchCase: false });
    }

    getSignUpLink() {
        return this.getLink("Sign up");
    }

    getLogInLink() {
        return this.getLink("Log in");
    }

    getMenu() {
        return cy.get("#main-menu");
    }

    getMenuButton(name: string) {
        return this.getMenu().contains("button", name);
    }

    getViewAllPricingLink() {
        return cy.get('#main-menu a[href="/pricing"]').filter(":visible").first();
    }

    getMobileMenuButton() {
        return cy.get('button[aria-controls="main-menu-content"]');
    }

    getMobileMenuContent() {
        return cy.get("#main-menu-content");
    }

    // Actions
    clickLogo() {
        this.getLogo().click();
    }

    openMenu(name: string) {
        this.getMenuButton(name).click();
    }

    clickSignUp() {
        this.getSignUpLink().click();
    }

    clickLogIn() {
        // The portal opens in a new tab, which Cypress cannot follow
        this.getLogInLink().invoke("removeAttr", "target").click();
    }

    clickViewAllPricing() {
        this.getViewAllPricingLink().click();
    }

    openMobileMenu() {
        this.getMobileMenuButton().click();
    }
}

export default new Header();
